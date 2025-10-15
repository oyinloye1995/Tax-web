import { useAuth } from '../contexts/AuthContext';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';

const Dashboard = () => {
  const { user } = useAuth();
  
  // Use real user data from signup, with fallbacks for demo
  const userData = {
    name: user ? `${user.firstName} ${user.lastName}` : "New User",
    email: user?.email || "user@email.com",
    membershipLevel: user?.membershipLevel || "Bronze Member",
    joinDate: user?.joinDate || "Today",
    totalPoints: user?.totalPoints || 0,
    availablePoints: user?.availablePoints || 0,
    redeemedPoints: user?.redeemedPoints || 0,
    lastActivity: new Date().toLocaleDateString(),
    nextLevelPoints: user?.totalPoints ? Math.max(0, 1000 - (user.totalPoints % 1000)) : 1000,
    currentStreak: 0 // New users start with 0 streak
  };

  // For new users, show empty/starting progress
  const isNewUser = !user?.totalPoints || user.totalPoints === 0;
  
  // Rewards progress tracking - empty for new users
  const rewardsProgress = isNewUser ? [
    { category: "Community Service", completed: false, progress: 0, activities: 8, completedActivities: 0, points: 0 },
    { category: "Civic Engagement", completed: false, progress: 0, activities: 5, completedActivities: 0, points: 0 },
    { category: "Environmental Action", completed: false, progress: 0, activities: 6, completedActivities: 0, points: 0 },
    { category: "Education & Learning", completed: false, progress: 0, activities: 10, completedActivities: 0, points: 0 },
    { category: "Health & Wellness", completed: false, progress: 0, activities: 8, completedActivities: 0, points: 0 }
  ] : [
    { category: "Community Service", completed: true, progress: 100, activities: 8, completedActivities: 8, points: 1200 },
    { category: "Civic Engagement", completed: true, progress: 100, activities: 5, completedActivities: 5, points: 800 },
    { category: "Environmental Action", completed: false, progress: 75, activities: 6, completedActivities: 4, points: 900 },
    { category: "Education & Learning", completed: false, progress: 40, activities: 10, completedActivities: 4, points: 600 },
    { category: "Health & Wellness", completed: false, progress: 20, activities: 8, completedActivities: 2, points: 300 }
  ];

  // Enhanced metrics dashboard for citizen rewards - show real data
  const dashboardMetrics = [
    {
      title: "Available Points",
      value: userData.availablePoints.toLocaleString(),
      change: isNewUser ? "Start earning today!" : "+340 this week",
      changeType: "increase" as const,
      icon: "🎁",
      description: isNewUser ? "Complete activities to earn" : "Ready to redeem"
    },
    {
      title: "Community Impact",
      value: isNewUser ? "0 Actions" : "15 Actions",
      change: isNewUser ? "Get started below" : "+3 this month",
      changeType: "increase" as const, 
      icon: "🌟",
      description: isNewUser ? "Start making a difference" : "Positive community contributions"
    },
    {
      title: "Current Streak",
      value: `${userData.currentStreak} Days`,
      change: isNewUser ? "Start your streak!" : "Personal best!",
      changeType: "neutral" as const,
      icon: "🔥",
      description: isNewUser ? "Complete daily activities" : "Daily engagement streak"
    },
    {
      title: "Membership Level",
      value: userData.membershipLevel.replace(' Member', ''),
      change: isNewUser ? `${userData.nextLevelPoints} to Silver` : `${userData.nextLevelPoints} to next level`,
      changeType: "positive" as const,
      icon: "👑", 
      description: isNewUser ? "Complete activities to level up" : "Exclusive benefits active"
    }
  ];

  // Enhanced recent activity for citizen rewards
  const recentActivity = [
    { 
      date: "Oct 14, 2025 - 2:30 PM", 
      action: "Completed park cleanup volunteer session", 
      type: "community",
      points: "+150",
      description: "Environmental stewardship activity"
    },
    { 
      date: "Oct 14, 2025 - 11:15 AM", 
      action: "Attended city council meeting", 
      type: "civic",
      points: "+100",
      description: "Civic engagement participation"
    },
    { 
      date: "Oct 13, 2025 - 4:45 PM", 
      action: "Redeemed transit voucher", 
      type: "redeem",
      points: "-500",
      description: "Monthly bus pass discount"
    },
    { 
      date: "Oct 12, 2025 - 9:20 AM",
      action: "Completed fitness challenge", 
      type: "health",
      points: "+75",
      description: "Weekly wellness goal achieved"
    }
  ];

  // Available rewards and benefits
  const availableRewards = [
    { name: "Monthly Bus Pass", cost: 500, status: "available", category: "Transportation", description: "50% discount on transit" },
    { name: "Library Late Fee Waiver", cost: 100, status: "available", category: "Education", description: "One-time fee forgiveness" },
    { name: "Community Center Membership", cost: 1000, status: "popular", category: "Recreation", description: "3-month membership" },
    { name: "Food Bank Volunteer Certificate", cost: 0, status: "earned", category: "Recognition", description: "Community service award" },
    { name: "Park Facility Rental Discount", cost: 300, status: "available", category: "Recreation", description: "25% off facility booking" },
    { name: "Local Business Gift Card", cost: 750, status: "limited", category: "Shopping", description: "$50 gift card voucher" }
  ];

  // Navigation functions
  const navigateToProfile = () => {
    window.location.hash = 'profile';
  };

  const navigateToBenefits = () => {
    window.location.hash = 'benefits';
  };

  const navigateToRewards = () => {
    window.location.hash = 'rewards-dashboard';
  };

  const navigateToHome = () => {
    window.location.hash = '';
  };

  // Enhanced utility functions
  const getActivityIcon = (type: string) => {
    switch (type) {
      case 'community': return '🌟';
      case 'civic': return '🏛️';
      case 'redeem': return '🎁';
      case 'health': return '💪';
      case 'education': return '📚';
      default: return '✨';
    }
  };

  const getRewardStatusColor = (status: string) => {
    switch (status) {
      case 'available': return 'bg-green-100 text-green-800';
      case 'popular': return 'bg-yellow-100 text-yellow-800';
      case 'limited': return 'bg-red-100 text-red-800';
      case 'earned': return 'bg-purple-100 text-purple-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-500 via-purple-600 to-emerald-500 p-4 sm:p-6 lg:p-8">
      {/* Main Container */}
      <div className="max-w-7xl mx-auto">
        
        {/* Top Header Section */}
        <div className="bg-white/95 backdrop-blur-xl rounded-2xl p-6 sm:p-8 mb-6 sm:mb-8 shadow-2xl border border-white/20">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 sm:gap-6">
            <div className="flex items-center gap-4 sm:gap-6">
              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-gradient-to-br from-blue-500 to-emerald-600 flex items-center justify-center text-white text-lg sm:text-xl font-bold shadow-lg">
                {userData.name.split(' ').map(n => n[0]).join('')}
              </div>
              <div>
                <h1 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent mb-2">
                  Welcome back, {userData.name.split(' ')[0]}! 🎁
                </h1>
                <p className="text-gray-600 text-lg font-medium">
                  {userData.membershipLevel} • Last activity: {userData.lastActivity}
                </p>
              </div>
            </div>
            
            <div className="flex gap-3 items-center">
              {/* CitizenRewards Brand */}
              <div 
                className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-emerald-600 bg-clip-text text-transparent cursor-pointer hover:scale-105 transition-transform duration-200"
                onClick={navigateToHome}
              >
                CitizenRewards
              </div>
              <Button 
                onClick={navigateToProfile}
                className="bg-gradient-to-r from-blue-600 to-emerald-600 hover:from-blue-700 hover:to-emerald-700 text-white"
              >
                View Profile
              </Button>
            </div>
          </div>
        </div>

        {/* Dashboard Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {dashboardMetrics.map((metric, index) => (
            <Card key={index} className="bg-white/90 backdrop-blur-sm border-white/20 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              <CardHeader className="pb-4">
                <div className="flex justify-between items-start">
                  <div>
                    <CardDescription className="text-gray-600 text-sm font-medium">
                      {metric.title}
                    </CardDescription>
                    <CardTitle className="text-2xl font-bold text-gray-800 mt-1">
                      {metric.value}
                    </CardTitle>
                  </div>
                  <div className="text-2xl">{metric.icon}</div>
                </div>
                <div className="flex items-center gap-2 mt-3">
                  <span className={`text-sm font-semibold ${
                    metric.changeType === 'increase' ? 'text-green-600' : 
                    metric.changeType === 'positive' ? 'text-blue-600' : 'text-gray-600'
                  }`}>
                    {metric.change}
                  </span>
                </div>
              </CardHeader>
            </Card>
          ))}
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Left Column - Progress & Activity */}
          <div className="lg:col-span-2 space-y-8">
            
            {/* Rewards Progress */}
            <Card className="bg-white/90 backdrop-blur-sm border-white/20 shadow-lg">
              <CardHeader>
                <CardTitle className="text-xl font-bold text-gray-800">🎯 Your Rewards Progress</CardTitle>
                <CardDescription>Track your citizen engagement activities</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {rewardsProgress.map((item, index) => (
                    <div key={index} className="border rounded-lg p-4 hover:bg-gray-50 transition-colors">
                      <div className="flex justify-between items-center mb-2">
                        <h3 className="font-semibold text-gray-800">{item.category}</h3>
                        <div className="flex items-center gap-2">
                          <Badge variant={item.completed ? "default" : "secondary"}>
                            {item.completedActivities}/{item.activities} activities
                          </Badge>
                          <span className="text-sm font-medium text-green-600">+{item.points} pts</span>
                        </div>
                      </div>
                      <Progress value={item.progress} className="h-3 mb-2" />
                      <p className="text-sm text-gray-600">{item.progress}% complete</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Recent Activity */}
            <Card className="bg-white/90 backdrop-blur-sm border-white/20 shadow-lg">
              <CardHeader>
                <CardTitle className="text-xl font-bold text-gray-800">📈 Recent Activity</CardTitle>
                <CardDescription>Your latest citizen engagement actions</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentActivity.map((activity, index) => (
                    <div key={index} className="flex items-start gap-3 p-3 border rounded-lg hover:bg-gray-50 transition-colors">
                      <div className="text-lg">{getActivityIcon(activity.type)}</div>
                      <div className="flex-1">
                        <div className="flex justify-between items-start">
                          <div>
                            <p className="font-medium text-gray-800">{activity.action}</p>
                            <p className="text-sm text-gray-600">{activity.description}</p>
                            <p className="text-xs text-gray-500 mt-1">{activity.date}</p>
                          </div>
                          {activity.points && (
                            <Badge variant={activity.points.startsWith('+') ? "default" : "destructive"}>
                              {activity.points} pts
                            </Badge>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right Column - Quick Actions & Rewards */}
          <div className="space-y-8">
            
            {/* Quick Actions */}
            <Card className="bg-white/90 backdrop-blur-sm border-white/20 shadow-lg">
              <CardHeader>
                <CardTitle className="text-xl font-bold text-gray-800">⚡ Quick Actions</CardTitle>
                <CardDescription>Explore rewards and benefits</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button 
                  onClick={navigateToRewards}
                  className="w-full bg-gradient-to-r from-blue-600 to-emerald-600 hover:from-blue-700 hover:to-emerald-700 text-white"
                >
                  🎁 Browse Rewards Catalog
                </Button>
                <Button 
                  onClick={navigateToBenefits}
                  variant="outline"
                  className="w-full border-blue-300 text-blue-700 hover:bg-blue-50"
                >
                  📋 View Available Benefits
                </Button>
                <Button 
                  variant="outline"
                  className="w-full border-emerald-300 text-emerald-700 hover:bg-emerald-50"
                >
                  🌟 Find Volunteer Opportunities
                </Button>
                <Button 
                  variant="outline"
                  className="w-full border-purple-300 text-purple-700 hover:bg-purple-50"
                >
                  🏛️ Check Civic Events
                </Button>
              </CardContent>
            </Card>

            {/* Available Rewards Preview */}
            <Card className="bg-white/90 backdrop-blur-sm border-white/20 shadow-lg">
              <CardHeader>
                <CardTitle className="text-xl font-bold text-gray-800">🎁 Popular Rewards</CardTitle>
                <CardDescription>Trending redemptions this month</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {availableRewards.slice(0, 4).map((reward, index) => (
                    <div key={index} className="border rounded-lg p-3 hover:bg-gray-50 transition-colors">
                      <div className="flex justify-between items-start">
                        <div className="flex-1">
                          <h4 className="font-medium text-gray-800">{reward.name}</h4>
                          <p className="text-sm text-gray-600">{reward.description}</p>
                          <div className="flex items-center gap-2 mt-2">
                            <Badge className={getRewardStatusColor(reward.status)}>
                              {reward.status}
                            </Badge>
                            <span className="text-sm font-medium text-gray-700">
                              {reward.cost > 0 ? `${reward.cost} pts` : 'Free'}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <Button 
                  onClick={navigateToRewards}
                  variant="outline" 
                  className="w-full mt-4 border-blue-300 text-blue-700 hover:bg-blue-50"
                >
                  View All Rewards →
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Back to Home */}
        <div className="text-center mt-8">
          <Button
            onClick={navigateToHome}
            variant="outline"
            className="bg-white/80 backdrop-blur-sm border-white/40 text-gray-700 hover:bg-white/90"
          >
            ← Back to Home
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;