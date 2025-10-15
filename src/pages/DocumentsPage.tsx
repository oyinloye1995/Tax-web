import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';

const DocumentsPage: React.FC = () => {
  const [uploadProgress, setUploadProgress] = useState(0);
  const [isUploading, setIsUploading] = useState(false);
  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);
  const [documentType, setDocumentType] = useState('');
  const [searchTerm, setSearchTerm] = useState('');

  // Mock documents data
  const [documents, setDocuments] = useState([
    {
      id: 1,
      name: 'W-2_ABC_Company_2024.pdf',
      type: 'W-2',
      size: '245 KB',
      uploadDate: 'Oct 13, 2025',
      status: 'processed',
      description: 'Employment income from ABC Company'
    },
    {
      id: 2,
      name: '1099-INT_First_Bank_2024.pdf',
      type: '1099-INT',
      size: '120 KB',
      uploadDate: 'Oct 12, 2025',
      status: 'processing',
      description: 'Interest income from First Bank'
    },
    {
      id: 3,
      name: 'Charitable_Donations_Receipt.pdf',
      type: 'Donation Receipt',
      size: '89 KB',
      uploadDate: 'Oct 10, 2025',
      status: 'processed',
      description: 'Charitable donations for 2024'
    },
    {
      id: 4,
      name: 'Student_Loan_Interest_1098E.pdf',
      type: '1098-E',
      size: '156 KB',
      uploadDate: 'Oct 8, 2025',
      status: 'error',
      description: 'Student loan interest statement'
    },
    {
      id: 5,
      name: 'Medical_Expenses_Summary.pdf',
      type: 'Medical Receipt',
      size: '203 KB',
      uploadDate: 'Oct 5, 2025',
      status: 'processed',
      description: 'Medical and dental expenses'
    }
  ]);

  // Document categories and requirements
  const documentCategories = [
    {
      category: 'Income Documents',
      required: true,
      documents: [
        { type: 'W-2', description: 'Employment income forms', required: true },
        { type: '1099-MISC', description: 'Miscellaneous income', required: false },
        { type: '1099-INT', description: 'Interest income', required: false },
        { type: '1099-DIV', description: 'Dividend income', required: false }
      ]
    },
    {
      category: 'Deduction Documents',
      required: false,
      documents: [
        { type: 'Mortgage Interest', description: '1098 forms', required: false },
        { type: 'Charitable Donations', description: 'Donation receipts', required: false },
        { type: 'Medical Expenses', description: 'Medical receipts', required: false },
        { type: 'Student Loan Interest', description: '1098-E forms', required: false }
      ]
    },
    {
      category: 'Business Documents',
      required: false,
      documents: [
        { type: 'Schedule C', description: 'Business income/expenses', required: false },
        { type: 'Business Receipts', description: 'Expense documentation', required: false },
        { type: 'Mileage Log', description: 'Business mileage records', required: false }
      ]
    }
  ];

  const handleFileUpload = () => {
    if (!documentType) {
      alert('Please select a document type before uploading');
      return;
    }

    setIsUploading(true);
    setUploadProgress(0);

    // Simulate file upload progress
    const interval = setInterval(() => {
      setUploadProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setIsUploading(false);
          
          // Add mock document to the list
          const newDocument = {
            id: documents.length + 1,
            name: `New_Document_${documentType}_2024.pdf`,
            type: documentType,
            size: '187 KB',
            uploadDate: new Date().toLocaleDateString('en-US', { 
              year: 'numeric', 
              month: 'short', 
              day: 'numeric' 
            }),
            status: 'processing',
            description: `Uploaded ${documentType} document`
          };
          
          setDocuments(prev => [newDocument, ...prev]);
          setDocumentType('');
          alert('Document uploaded successfully!');
          return 100;
        }
        return prev + 10;
      });
    }, 200);
  };

  const getStatusBadge = (status) => {
    switch (status) {
      case 'processed':
        return <Badge style={{ backgroundColor: '#22c55e', color: 'white' }}>✓ Processed</Badge>;
      case 'processing':
        return <Badge style={{ backgroundColor: '#f59e0b', color: 'white' }}>⏳ Processing</Badge>;
      case 'error':
        return <Badge variant="destructive">❌ Error</Badge>;
      case 'pending':
        return <Badge variant="secondary">📋 Pending</Badge>;
      default:
        return <Badge variant="outline">Unknown</Badge>;
    }
  };

  const deleteDocument = (id) => {
    if (confirm('Are you sure you want to delete this document?')) {
      setDocuments(prev => prev.filter(doc => doc.id !== id));
    }
  };

  const downloadDocument = (documentName) => {
    alert(`Downloading ${documentName}...`);
  };

  const viewDocument = (documentName) => {
    alert(`Opening ${documentName} for preview...`);
  };

  const filteredDocuments = documents.filter(doc =>
    doc.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    doc.type.toLowerCase().includes(searchTerm.toLowerCase()) ||
    doc.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const navigateToHome = () => {
    window.location.hash = '';
  };

  const navigateToDashboard = () => {
    window.location.hash = '#dashboard';
  };

  const getDocumentTypeIcon = (type) => {
    if (type.includes('W-2')) return '💼';
    if (type.includes('1099')) return '📋';
    if (type.includes('Receipt')) return '🧾';
    if (type.includes('Medical')) return '🏥';
    if (type.includes('Charitable') || type.includes('Donation')) return '❤️';
    if (type.includes('Student') || type.includes('1098')) return '🎓';
    return '📄';
  };

  return (
    <div style={{
      minHeight: '100vh',
      backgroundColor: '#f8fafc',
      padding: '20px'
    }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        {/* Header */}
        <div style={{ 
          display: 'flex', 
          justifyContent: 'space-between', 
          alignItems: 'center',
          marginBottom: '30px',
          backgroundColor: 'white',
          padding: '20px',
          borderRadius: '12px',
          boxShadow: '0 2px 10px rgba(0,0,0,0.1)'
        }}>
          <div>
            <h1 style={{ fontSize: '2rem', fontWeight: 'bold', margin: '0', color: '#1f2937' }}>
              📄 Document Center
            </h1>
            <p style={{ color: '#6b7280', fontSize: '1rem', margin: '5px 0 0 0' }}>
              Upload and manage your tax documents securely
            </p>
          </div>
          <div style={{ display: 'flex', gap: '10px' }}>
            <Button variant="outline" onClick={navigateToHome}>
              ← Home
            </Button>
            <Button variant="outline" onClick={navigateToDashboard}>
              Dashboard
            </Button>
          </div>
        </div>

        {/* Quick Stats */}
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', 
          gap: '20px',
          marginBottom: '30px'
        }}>
          <Card>
            <CardContent style={{ padding: '20px' }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <div>
                  <p style={{ fontSize: '2rem', fontWeight: 'bold', color: '#3b82f6', margin: '0' }}>
                    {documents.length}
                  </p>
                  <p style={{ color: '#6b7280', fontSize: '0.9rem', marginTop: '5px' }}>
                    Total Documents
                  </p>
                </div>
                <div style={{ fontSize: '2rem' }}>📁</div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent style={{ padding: '20px' }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <div>
                  <p style={{ fontSize: '2rem', fontWeight: 'bold', color: '#22c55e', margin: '0' }}>
                    {documents.filter(doc => doc.status === 'processed').length}
                  </p>
                  <p style={{ color: '#6b7280', fontSize: '0.9rem', marginTop: '5px' }}>
                    Processed
                  </p>
                </div>
                <div style={{ fontSize: '2rem' }}>✅</div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent style={{ padding: '20px' }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <div>
                  <p style={{ fontSize: '2rem', fontWeight: 'bold', color: '#f59e0b', margin: '0' }}>
                    {documents.filter(doc => doc.status === 'processing').length}
                  </p>
                  <p style={{ color: '#6b7280', fontSize: '0.9rem', marginTop: '5px' }}>
                    Processing
                  </p>
                </div>
                <div style={{ fontSize: '2rem' }}>⏳</div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent style={{ padding: '20px' }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <div>
                  <p style={{ fontSize: '2rem', fontWeight: 'bold', color: '#ef4444', margin: '0' }}>
                    {documents.filter(doc => doc.status === 'error').length}
                  </p>
                  <p style={{ color: '#6b7280', fontSize: '0.9rem', marginTop: '5px' }}>
                    Errors
                  </p>
                </div>
                <div style={{ fontSize: '2rem' }}>❌</div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Main Content */}
        <Tabs defaultValue="upload" style={{ backgroundColor: 'white', borderRadius: '12px' }}>
          <TabsList style={{ 
            width: '100%', 
            justifyContent: 'flex-start', 
            backgroundColor: '#f9fafb',
            padding: '6px',
            borderRadius: '12px 12px 0 0'
          }}>
            <TabsTrigger value="upload" style={{ fontSize: '1rem', padding: '12px 24px' }}>
              📤 Upload Documents
            </TabsTrigger>
            <TabsTrigger value="manage" style={{ fontSize: '1rem', padding: '12px 24px' }}>
              📋 Manage Documents
            </TabsTrigger>
            <TabsTrigger value="requirements" style={{ fontSize: '1rem', padding: '12px 24px' }}>
              📝 Document Requirements
            </TabsTrigger>
          </TabsList>

          {/* Upload Tab */}
          <TabsContent value="upload" style={{ padding: '30px' }}>
            <div style={{ display: 'grid', gap: '25px' }}>
              <Alert style={{ backgroundColor: '#dbeafe', border: '1px solid #3b82f6' }}>
                <AlertDescription style={{ color: '#1e40af' }}>
                  💡 Upload your tax documents securely. Supported formats: PDF, JPG, PNG. Maximum file size: 10MB per file.
                </AlertDescription>
              </Alert>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '25px' }}>
                <Card>
                  <CardHeader>
                    <CardTitle>Upload New Document</CardTitle>
                    <CardDescription>Select document type and upload your files</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div style={{ display: 'grid', gap: '20px' }}>
                      <div>
                        <Label htmlFor="documentType">Document Type *</Label>
                        <Select value={documentType} onValueChange={setDocumentType}>
                          <SelectTrigger style={{ marginTop: '8px' }}>
                            <SelectValue placeholder="Select document type" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="W-2">W-2 (Employment Income)</SelectItem>
                            <SelectItem value="1099-MISC">1099-MISC (Miscellaneous Income)</SelectItem>
                            <SelectItem value="1099-INT">1099-INT (Interest Income)</SelectItem>
                            <SelectItem value="1099-DIV">1099-DIV (Dividend Income)</SelectItem>
                            <SelectItem value="1098">1098 (Mortgage Interest)</SelectItem>
                            <SelectItem value="1098-E">1098-E (Student Loan Interest)</SelectItem>
                            <SelectItem value="Donation Receipt">Charitable Donation Receipt</SelectItem>
                            <SelectItem value="Medical Receipt">Medical Expense Receipt</SelectItem>
                            <SelectItem value="Business Receipt">Business Expense Receipt</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div>
                        <Label htmlFor="fileUpload">Choose Files</Label>
                        <Input
                          id="fileUpload"
                          type="file"
                          multiple
                          accept=".pdf,.jpg,.jpeg,.png"
                          style={{ marginTop: '8px' }}
                          onChange={(e) => setSelectedFiles(Array.from(e.target.files))}
                        />
                        <p style={{ fontSize: '0.875rem', color: '#6b7280', marginTop: '5px' }}>
                          Supported formats: PDF, JPG, PNG (Max 10MB each)
                        </p>
                      </div>

                      {isUploading && (
                        <div>
                          <Label>Upload Progress</Label>
                          <Progress value={uploadProgress} style={{ marginTop: '8px' }} />
                          <p style={{ fontSize: '0.875rem', color: '#6b7280', marginTop: '5px' }}>
                            {uploadProgress}% uploaded
                          </p>
                        </div>
                      )}

                      <Button 
                        onClick={handleFileUpload}
                        disabled={isUploading || !documentType}
                        style={{ 
                          background: isUploading ? '#9ca3af' : 'linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%)',
                          color: 'white',
                          border: 'none'
                        }}
                      >
                        {isUploading ? '⏳ Uploading...' : '📤 Upload Documents'}
                      </Button>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Upload Tips</CardTitle>
                    <CardDescription>Best practices for document uploads</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div style={{ display: 'grid', gap: '15px' }}>
                      <div style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                        <div style={{ fontSize: '1.2rem' }}>📱</div>
                        <div>
                          <p style={{ fontWeight: '500', margin: '0', fontSize: '0.9rem' }}>
                            Use Mobile Scanner
                          </p>
                          <p style={{ color: '#6b7280', fontSize: '0.8rem', marginTop: '3px' }}>
                            Use your phone's camera to scan documents clearly
                          </p>
                        </div>
                      </div>

                      <div style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                        <div style={{ fontSize: '1.2rem' }}>💡</div>
                        <div>
                          <p style={{ fontWeight: '500', margin: '0', fontSize: '0.9rem' }}>
                            Good Lighting
                          </p>
                          <p style={{ color: '#6b7280', fontSize: '0.8rem', marginTop: '3px' }}>
                            Ensure documents are well-lit and text is readable
                          </p>
                        </div>
                      </div>

                      <div style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                        <div style={{ fontSize: '1.2rem' }}>📋</div>
                        <div>
                          <p style={{ fontWeight: '500', margin: '0', fontSize: '0.9rem' }}>
                            Complete Forms
                          </p>
                          <p style={{ color: '#6b7280', fontSize: '0.8rem', marginTop: '3px' }}>
                            Upload complete documents - all pages if multi-page
                          </p>
                        </div>
                      </div>

                      <div style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                        <div style={{ fontSize: '1.2rem' }}>🔒</div>
                        <div>
                          <p style={{ fontWeight: '500', margin: '0', fontSize: '0.9rem' }}>
                            Secure Storage
                          </p>
                          <p style={{ color: '#6b7280', fontSize: '0.8rem', marginTop: '3px' }}>
                            All documents are encrypted and stored securely
                          </p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>

          {/* Manage Documents Tab */}
          <TabsContent value="manage" style={{ padding: '30px' }}>
            <div style={{ display: 'grid', gap: '25px' }}>
              {/* Search and Filter */}
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div>
                  <h3 style={{ fontSize: '1.3rem', fontWeight: '600', margin: '0' }}>
                    Your Documents
                  </h3>
                  <p style={{ color: '#6b7280', fontSize: '0.9rem', marginTop: '5px' }}>
                    View, download, and manage your uploaded tax documents
                  </p>
                </div>
                <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                  <Input
                    placeholder="Search documents..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    style={{ width: '250px' }}
                  />
                  <Button variant="outline">
                    🔍 Search
                  </Button>
                </div>
              </div>

              {/* Documents Table */}
              <Card>
                <CardContent style={{ padding: '0' }}>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Document</TableHead>
                        <TableHead>Type</TableHead>
                        <TableHead>Size</TableHead>
                        <TableHead>Upload Date</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead>Actions</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {filteredDocuments.length === 0 ? (
                        <TableRow>
                          <TableCell colSpan={6} style={{ textAlign: 'center', padding: '40px' }}>
                            <div style={{ color: '#6b7280' }}>
                              <div style={{ fontSize: '3rem', marginBottom: '10px' }}>📄</div>
                              <p style={{ fontSize: '1.1rem', margin: '0' }}>No documents found</p>
                              <p style={{ fontSize: '0.9rem', marginTop: '5px' }}>
                                {searchTerm ? 'Try adjusting your search terms' : 'Upload your first document to get started'}
                              </p>
                            </div>
                          </TableCell>
                        </TableRow>
                      ) : (
                        filteredDocuments.map((doc) => (
                          <TableRow key={doc.id}>
                            <TableCell>
                              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                                <div style={{ fontSize: '1.5rem' }}>{getDocumentTypeIcon(doc.type)}</div>
                                <div>
                                  <p style={{ fontWeight: '500', margin: '0', fontSize: '0.9rem' }}>
                                    {doc.name}
                                  </p>
                                  <p style={{ color: '#6b7280', fontSize: '0.8rem', marginTop: '2px' }}>
                                    {doc.description}
                                  </p>
                                </div>
                              </div>
                            </TableCell>
                            <TableCell>
                              <Badge variant="outline">{doc.type}</Badge>
                            </TableCell>
                            <TableCell style={{ color: '#6b7280' }}>{doc.size}</TableCell>
                            <TableCell style={{ color: '#6b7280' }}>{doc.uploadDate}</TableCell>
                            <TableCell>{getStatusBadge(doc.status)}</TableCell>
                            <TableCell>
                              <div style={{ display: 'flex', gap: '5px' }}>
                                <Button 
                                  variant="ghost" 
                                  size="sm"
                                  onClick={() => viewDocument(doc.name)}
                                >
                                  👁️ View
                                </Button>
                                <Button 
                                  variant="ghost" 
                                  size="sm"
                                  onClick={() => downloadDocument(doc.name)}
                                >
                                  📥 Download
                                </Button>
                                <Dialog>
                                  <DialogTrigger asChild>
                                    <Button variant="ghost" size="sm" style={{ color: '#ef4444' }}>
                                      🗑️ Delete
                                    </Button>
                                  </DialogTrigger>
                                  <DialogContent>
                                    <DialogHeader>
                                      <DialogTitle>Delete Document</DialogTitle>
                                      <DialogDescription>
                                        Are you sure you want to delete "{doc.name}"? This action cannot be undone.
                                      </DialogDescription>
                                    </DialogHeader>
                                    <div style={{ display: 'flex', gap: '10px', marginTop: '20px' }}>
                                      <Button 
                                        variant="destructive" 
                                        onClick={() => deleteDocument(doc.id)}
                                      >
                                        Yes, Delete
                                      </Button>
                                    </div>
                                  </DialogContent>
                                </Dialog>
                              </div>
                            </TableCell>
                          </TableRow>
                        ))
                      )}
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Requirements Tab */}
          <TabsContent value="requirements" style={{ padding: '30px' }}>
            <div style={{ display: 'grid', gap: '25px' }}>
              <div>
                <h3 style={{ fontSize: '1.3rem', fontWeight: '600', margin: '0' }}>
                  Document Requirements Checklist
                </h3>
                <p style={{ color: '#6b7280', fontSize: '0.9rem', marginTop: '5px' }}>
                  Here's what documents you may need for your tax return
                </p>
              </div>

              {documentCategories.map((category, categoryIndex) => (
                <Card key={categoryIndex}>
                  <CardHeader>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                      <CardTitle style={{ fontSize: '1.2rem' }}>{category.category}</CardTitle>
                      {category.required && (
                        <Badge variant="destructive">Required</Badge>
                      )}
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div style={{ display: 'grid', gap: '15px' }}>
                      {category.documents.map((doc, docIndex) => (
                        <div key={docIndex} style={{ 
                          display: 'flex', 
                          alignItems: 'center', 
                          justifyContent: 'space-between',
                          padding: '15px',
                          backgroundColor: '#f9fafb',
                          borderRadius: '8px',
                          border: '1px solid #e5e7eb'
                        }}>
                          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                            <Checkbox 
                              checked={documents.some(d => d.type.includes(doc.type))}
                              disabled
                            />
                            <div>
                              <p style={{ fontWeight: '500', margin: '0', fontSize: '0.95rem' }}>
                                {doc.type}
                                {doc.required && <span style={{ color: '#ef4444' }}> *</span>}
                              </p>
                              <p style={{ color: '#6b7280', fontSize: '0.85rem', marginTop: '3px' }}>
                                {doc.description}
                              </p>
                            </div>
                          </div>
                          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                            {documents.some(d => d.type.includes(doc.type)) ? (
                              <Badge style={{ backgroundColor: '#22c55e', color: 'white' }}>
                                ✓ Uploaded
                              </Badge>
                            ) : (
                              <Badge variant="secondary">
                                📋 Needed
                              </Badge>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}

              <Alert style={{ backgroundColor: '#f0fdf4', border: '1px solid #22c55e' }}>
                <AlertDescription style={{ color: '#166534' }}>
                  💡 Tip: You don't need to upload all documents at once. You can always come back and add more documents as you gather them.
                </AlertDescription>
              </Alert>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default DocumentsPage;