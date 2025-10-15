import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/seperator';
import { Textarea } from '@/components/ui/textarea';

const ProfilePage = () => {
  const [profileData, setProfileData] = useState({
    // Personal Information
    firstName: 'John',
    lastName: 'Doe',
    email: 'john.doe@email.com',
    phoneNumber: '(555) 123-4567',
    dateOfBirth: '1990-05-15',
    
    // Address
    address: '123 Main Street',
    city: 'New York',
    state: 'NY',
    zipCode: '10001',
    country: 'United States',
    
    // Citizen Rewards Information
    membershipLevel: 'Gold',
    occupation: 'Software Engineer',
    employer: 'ABC Tech Company',
    citizenId: 'CR-2024-001234',
    
    // Account Settings
    twoFactorEnabled: true,
    emailNotifications: true,
    smsNotifications: false,
    marketingEmails: false,
    rewardsNotifications: true,
    language: 'en',
    timezone: 'EST',
    
    // Privacy Settings
    profileVisibility: 'private',
    dataSharing: false,
    volunteerHistory: true,
    communityEngagement: true,
    
    // Preferences
    preferredActivities: ['community-service', 'environmental', 'civic'],
    communicationPreferences: 'email',
    rewardCategories: ['transportation', 'recreation', 'education'],
    volunteerInterests: ['environment', 'education', 'seniors'],
    
    // Accessibility
    largeText: false,
    highContrast: false,
    screenReader: false,
    
    // Security
    loginNotifications: true,
    deviceTrusting: false,
    sessionTimeout: 30
  });

  const [isEditing, setIsEditing] = useState(false);
  const [activeTab, setActiveTab] = useState('personal');
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  // Stats for citizen engagement
  const userStats = {
    totalPoints: 12450,
    redeemedPoints: 3730,
    memberSince: 'January 2024',
    currentStreak: 15,
    activitiesCompleted: 47,
    communityImpact: 'High',
    volunteerHours: 128,
    badgesEarned: 12
  };

  const handleSave = () => {
    // Simulate API call
    setIsEditing(false);
    setShowSuccessMessage(true);
    setTimeout(() => setShowSuccessMessage(false), 3000);
  };

  const handleInputChange = (field: string, value: string | boolean | string[]) => {
    setProfileData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const navigateToHome = () => {
    window.location.hash = '';
  };

  const navigateToDashboard = () => {
    window.location.hash = 'dashboard';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-500 via-purple-600 to-emerald-500 p-4 sm:p-6 lg:p-8">
      <div className="max-w-6xl mx-auto">
        
        {/* Header */}
        <div className="bg-white/95 backdrop-blur-xl rounded-2xl p-6 sm:p-8 mb-6 shadow-2xl border border-white/20">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <div className="flex items-center gap-4">
              <Avatar className="w-20 h-20 border-4 border-blue-200">
                <AvatarFallback className="bg-gradient-to-br from-blue-500 to-emerald-600 text-white text-xl font-bold">
                  {profileData.firstName[0]}{profileData.lastName[0]}
                </AvatarFallback>
                <AvatarImage src="/avatar.jpg" />
              </Avatar>
              <div>
                <h1 className="text-3xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
                  {profileData.firstName} {profileData.lastName}
                </h1>
                <p className="text-gray-600 text-lg">{profileData.membershipLevel} Member</p>
                <Badge className="bg-blue-100 text-blue-800 mt-1">
                  {userStats.totalPoints.toLocaleString()} Points Available
                </Badge>
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
                onClick={navigateToDashboard}
                variant="outline"
                className="border-blue-300 text-blue-700 hover:bg-blue-50"
              >
                ← Back to Dashboard
              </Button>
            </div>
          </div>
        </div>

        {/* Success Message */}
        {showSuccessMessage && (
          <Alert className="mb-6 border-green-200 bg-green-50">
            <AlertDescription className="text-green-800">
              ✅ Profile updated successfully!
            </AlertDescription>
          </Alert>
        )}

        {/* Main Content */}
        <div className="bg-white/95 backdrop-blur-xl rounded-2xl shadow-2xl border border-white/20">
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-full grid-cols-4 lg:grid-cols-6 bg-gray-100/50 m-4 rounded-xl">
              <TabsTrigger value="personal" className="text-xs sm:text-sm">Personal</TabsTrigger>
              <TabsTrigger value="rewards" className="text-xs sm:text-sm">Rewards</TabsTrigger>
              <TabsTrigger value="preferences" className="text-xs sm:text-sm">Preferences</TabsTrigger>
              <TabsTrigger value="privacy" className="text-xs sm:text-sm">Privacy</TabsTrigger>
              <TabsTrigger value="notifications" className="text-xs sm:text-sm">Notifications</TabsTrigger>
              <TabsTrigger value="security" className="text-xs sm:text-sm">Security</TabsTrigger>
            </TabsList>

            {/* Personal Information Tab */}
            <TabsContent value="personal" className="p-6 space-y-6">
              <div className="flex justify-between items-center">
                <h2 className="text-2xl font-bold text-gray-800">Personal Information</h2>
                <Button 
                  onClick={() => isEditing ? handleSave() : setIsEditing(true)}
                  className="bg-gradient-to-r from-blue-600 to-emerald-600 hover:from-blue-700 hover:to-emerald-700"
                >
                  {isEditing ? 'Save Changes' : 'Edit Profile'}
                </Button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Basic Information</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="firstName">First Name</Label>
                        <Input
                          id="firstName"
                          value={profileData.firstName}
                          onChange={(e) => handleInputChange('firstName', e.target.value)}
                          disabled={!isEditing}
                        />
                      </div>
                      <div>
                        <Label htmlFor="lastName">Last Name</Label>
                        <Input
                          id="lastName"
                          value={profileData.lastName}
                          onChange={(e) => handleInputChange('lastName', e.target.value)}
                          disabled={!isEditing}
                        />
                      </div>
                    </div>
                    <div>
                      <Label htmlFor="email">Email Address</Label>
                      <Input
                        id="email"
                        type="email"
                        value={profileData.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                        disabled={!isEditing}
                      />
                    </div>
                    <div>
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input
                        id="phone"
                        value={profileData.phoneNumber}
                        onChange={(e) => handleInputChange('phoneNumber', e.target.value)}
                        disabled={!isEditing}
                      />
                    </div>
                    <div>
                      <Label htmlFor="dob">Date of Birth</Label>
                      <Input
                        id="dob"
                        type="date"
                        value={profileData.dateOfBirth}
                        onChange={(e) => handleInputChange('dateOfBirth', e.target.value)}
                        disabled={!isEditing}
                      />
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Address Information</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <Label htmlFor="address">Street Address</Label>
                      <Input
                        id="address"
                        value={profileData.address}
                        onChange={(e) => handleInputChange('address', e.target.value)}
                        disabled={!isEditing}
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="city">City</Label>
                        <Input
                          id="city"
                          value={profileData.city}
                          onChange={(e) => handleInputChange('city', e.target.value)}
                          disabled={!isEditing}
                        />
                      </div>
                      <div>
                        <Label htmlFor="state">State</Label>
                        <Select disabled={!isEditing} value={profileData.state}>
                          <SelectTrigger>
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="NY">New York</SelectItem>
                            <SelectItem value="CA">California</SelectItem>
                            <SelectItem value="TX">Texas</SelectItem>
                            <SelectItem value="FL">Florida</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="zip">ZIP Code</Label>
                        <Input
                          id="zip"
                          value={profileData.zipCode}
                          onChange={(e) => handleInputChange('zipCode', e.target.value)}
                          disabled={!isEditing}
                        />
                      </div>
                      <div>
                        <Label htmlFor="country">Country</Label>
                        <Input
                          id="country"
                          value={profileData.country}
                          disabled={true}
                        />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            {/* Rewards Tab */}
            <TabsContent value="rewards" className="p-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Citizen Rewards Profile</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                <Card>
                  <CardContent className="p-6 text-center">
                    <div className="text-3xl font-bold text-blue-600">{userStats.totalPoints.toLocaleString()}</div>
                    <div className="text-sm text-gray-600">Total Points</div>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6 text-center">
                    <div className="text-3xl font-bold text-emerald-600">{userStats.activitiesCompleted}</div>
                    <div className="text-sm text-gray-600">Activities Completed</div>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6 text-center">
                    <div className="text-3xl font-bold text-purple-600">{userStats.volunteerHours}</div>
                    <div className="text-sm text-gray-600">Volunteer Hours</div>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6 text-center">
                    <div className="text-3xl font-bold text-orange-600">{userStats.badgesEarned}</div>
                    <div className="text-sm text-gray-600">Badges Earned</div>
                  </CardContent>
                </Card>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Membership Details</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <Label htmlFor="membershipLevel">Membership Level</Label>
                      <Input
                        id="membershipLevel"
                        value={profileData.membershipLevel}
                        disabled={true}
                      />
                    </div>
                    <div>
                      <Label htmlFor="citizenId">Citizen ID</Label>
                      <Input
                        id="citizenId"
                        value={profileData.citizenId}
                        disabled={true}
                      />
                    </div>
                    <div>
                      <Label htmlFor="memberSince">Member Since</Label>
                      <Input
                        id="memberSince"
                        value={userStats.memberSince}
                        disabled={true}
                      />
                    </div>
                    <div>
                      <Label htmlFor="currentStreak">Current Streak</Label>
                      <Input
                        id="currentStreak"
                        value={`${userStats.currentStreak} days`}
                        disabled={true}
                      />
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Professional Information</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <Label htmlFor="occupation">Occupation</Label>
                      <Input
                        id="occupation"
                        value={profileData.occupation}
                        onChange={(e) => handleInputChange('occupation', e.target.value)}
                        disabled={!isEditing}
                      />
                    </div>
                    <div>
                      <Label htmlFor="employer">Employer</Label>
                      <Input
                        id="employer"
                        value={profileData.employer}
                        onChange={(e) => handleInputChange('employer', e.target.value)}
                        disabled={!isEditing}
                      />
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            {/* Preferences Tab */}
            <TabsContent value="preferences" className="p-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Preferences & Interests</h2>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Activity Preferences</CardTitle>
                    <CardDescription>Choose your preferred types of citizen activities</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-3">
                      {[
                        { id: 'community-service', label: '🌟 Community Service' },
                        { id: 'environmental', label: '🌿 Environmental Action' },
                        { id: 'civic', label: '🏛️ Civic Engagement' },
                        { id: 'education', label: '📚 Education & Learning' },
                        { id: 'health', label: '💪 Health & Wellness' }
                      ].map((activity) => (
                        <div key={activity.id} className="flex items-center space-x-2">
                          <input
                            type="checkbox"
                            id={activity.id}
                            checked={profileData.preferredActivities.includes(activity.id)}
                            onChange={(e) => {
                              const newActivities = e.target.checked
                                ? [...profileData.preferredActivities, activity.id]
                                : profileData.preferredActivities.filter(a => a !== activity.id);
                              handleInputChange('preferredActivities', newActivities);
                            }}
                            disabled={!isEditing}
                            className="rounded"
                          />
                          <Label htmlFor={activity.id}>{activity.label}</Label>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Reward Categories</CardTitle>
                    <CardDescription>Select reward types you're most interested in</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-3">
                      {[
                        { id: 'transportation', label: '🚌 Transportation' },
                        { id: 'recreation', label: '🎯 Recreation' },
                        { id: 'education', label: '📖 Education' },
                        { id: 'shopping', label: '🛍️ Shopping' },
                        { id: 'dining', label: '🍽️ Dining' }
                      ].map((category) => (
                        <div key={category.id} className="flex items-center space-x-2">
                          <input
                            type="checkbox"
                            id={category.id}
                            checked={profileData.rewardCategories.includes(category.id)}
                            onChange={(e) => {
                              const newCategories = e.target.checked
                                ? [...profileData.rewardCategories, category.id]
                                : profileData.rewardCategories.filter(c => c !== category.id);
                              handleInputChange('rewardCategories', newCategories);
                            }}
                            disabled={!isEditing}
                            className="rounded"
                          />
                          <Label htmlFor={category.id}>{category.label}</Label>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            {/* Privacy Tab */}
            <TabsContent value="privacy" className="p-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Privacy Settings</h2>
              
              <Card>
                <CardHeader>
                  <CardTitle>Data & Privacy Controls</CardTitle>
                  <CardDescription>Manage how your information is used and shared</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <Label htmlFor="profileVisibility">Profile Visibility</Label>
                      <p className="text-sm text-gray-600">Control who can see your citizen profile</p>
                    </div>
                    <Select disabled={!isEditing} value={profileData.profileVisibility}>
                      <SelectTrigger className="w-48">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="public">Public</SelectItem>
                        <SelectItem value="friends">Friends Only</SelectItem>
                        <SelectItem value="private">Private</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <Separator />

                  <div className="flex items-center justify-between">
                    <div>
                      <Label htmlFor="dataSharing">Data Sharing</Label>
                      <p className="text-sm text-gray-600">Allow anonymized data to improve citizen services</p>
                    </div>
                    <Switch
                      id="dataSharing"
                      checked={profileData.dataSharing}
                      onCheckedChange={(checked) => handleInputChange('dataSharing', checked)}
                      disabled={!isEditing}
                    />
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <Label htmlFor="volunteerHistory">Volunteer History</Label>
                      <p className="text-sm text-gray-600">Show your volunteer activities to community partners</p>
                    </div>
                    <Switch
                      id="volunteerHistory"
                      checked={profileData.volunteerHistory}
                      onCheckedChange={(checked) => handleInputChange('volunteerHistory', checked)}
                      disabled={!isEditing}
                    />
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <Label htmlFor="communityEngagement">Community Engagement</Label>
                      <p className="text-sm text-gray-600">Display your civic participation publicly</p>
                    </div>
                    <Switch
                      id="communityEngagement"
                      checked={profileData.communityEngagement}
                      onCheckedChange={(checked) => handleInputChange('communityEngagement', checked)}
                      disabled={!isEditing}
                    />
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Notifications Tab */}
            <TabsContent value="notifications" className="p-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Notification Preferences</h2>
              
              <Card>
                <CardHeader>
                  <CardTitle>Communication Settings</CardTitle>
                  <CardDescription>Choose how you want to receive updates</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <Label htmlFor="emailNotifications">Email Notifications</Label>
                      <p className="text-sm text-gray-600">Receive important updates via email</p>
                    </div>
                    <Switch
                      id="emailNotifications"
                      checked={profileData.emailNotifications}
                      onCheckedChange={(checked) => handleInputChange('emailNotifications', checked)}
                      disabled={!isEditing}
                    />
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <Label htmlFor="smsNotifications">SMS Notifications</Label>
                      <p className="text-sm text-gray-600">Get urgent alerts via text message</p>
                    </div>
                    <Switch
                      id="smsNotifications"
                      checked={profileData.smsNotifications}
                      onCheckedChange={(checked) => handleInputChange('smsNotifications', checked)}
                      disabled={!isEditing}
                    />
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <Label htmlFor="rewardsNotifications">Rewards Notifications</Label>
                      <p className="text-sm text-gray-600">Alerts about new rewards and opportunities</p>
                    </div>
                    <Switch
                      id="rewardsNotifications"
                      checked={profileData.rewardsNotifications}
                      onCheckedChange={(checked) => handleInputChange('rewardsNotifications', checked)}
                      disabled={!isEditing}
                    />
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <Label htmlFor="marketingEmails">Marketing Communications</Label>
                      <p className="text-sm text-gray-600">Promotional content and community newsletters</p>
                    </div>
                    <Switch
                      id="marketingEmails"
                      checked={profileData.marketingEmails}
                      onCheckedChange={(checked) => handleInputChange('marketingEmails', checked)}
                      disabled={!isEditing}
                    />
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Security Tab */}
            <TabsContent value="security" className="p-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Security Settings</h2>
              
              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Account Security</CardTitle>
                    <CardDescription>Manage your account security settings</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <Label htmlFor="twoFactorEnabled">Two-Factor Authentication</Label>
                        <p className="text-sm text-gray-600">Add an extra layer of security to your account</p>
                      </div>
                      <Switch
                        id="twoFactorEnabled"
                        checked={profileData.twoFactorEnabled}
                        onCheckedChange={(checked) => handleInputChange('twoFactorEnabled', checked)}
                        disabled={!isEditing}
                      />
                    </div>

                    <div className="flex items-center justify-between">
                      <div>
                        <Label htmlFor="loginNotifications">Login Notifications</Label>
                        <p className="text-sm text-gray-600">Get notified of new account logins</p>
                      </div>
                      <Switch
                        id="loginNotifications"
                        checked={profileData.loginNotifications}
                        onCheckedChange={(checked) => handleInputChange('loginNotifications', checked)}
                        disabled={!isEditing}
                      />
                    </div>

                    <div className="flex items-center justify-between">
                      <div>
                        <Label htmlFor="sessionTimeout">Session Timeout</Label>
                        <p className="text-sm text-gray-600">Automatically log out after inactivity</p>
                      </div>
                      <Select disabled={!isEditing} value={profileData.sessionTimeout.toString()}>
                        <SelectTrigger className="w-32">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="15">15 min</SelectItem>
                          <SelectItem value="30">30 min</SelectItem>
                          <SelectItem value="60">1 hour</SelectItem>
                          <SelectItem value="120">2 hours</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Password & Access</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <Button 
                      variant="outline" 
                      className="w-full border-blue-300 text-blue-700 hover:bg-blue-50"
                    >
                      Change Password
                    </Button>
                    <Button 
                      variant="outline" 
                      className="w-full border-gray-300 text-gray-700 hover:bg-gray-50"
                    >
                      View Active Sessions
                    </Button>
                    <Button 
                      variant="outline" 
                      className="w-full border-red-300 text-red-700 hover:bg-red-50"
                    >
                      Download My Data
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>

        {/* Footer */}
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

export default ProfilePage;