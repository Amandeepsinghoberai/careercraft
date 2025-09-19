import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  FileText, 
  Target, 
  Zap, 
  User, 
  Copy, 
  CheckCircle, 
  BarChart3,
  Clock,
  Download,
  Plus,
  TrendingUp
} from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';

interface ResumeAnalysis {
  improved_resume: string;
  ats_score: number;
  strengths: string[];
  weaknesses: string[];
  keyword_gap: string[];
  cover_letter: string;
  linkedin_summary: {
    headline: string;
    about: string;
  };
  tips: string[];
}

const Dashboard: React.FC = () => {
  const { user } = useAuth();
  const [formData, setFormData] = useState({
    resume: '',
    job_description: '',
    role: '',
    tone: 'professional'
  });
  const [analysis, setAnalysis] = useState<ResumeAnalysis | null>(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [copied, setCopied] = useState(false);

  const analyzeResume = async () => {
    if (!formData.resume.trim()) {
      alert('Please enter your resume content first.');
      return;
    }

    setIsAnalyzing(true);
    
    // Simulate API call with actual resume analysis logic
    setTimeout(() => {
      const mockAnalysis: ResumeAnalysis = {
        improved_resume: generateImprovedResume(formData.resume, formData.job_description, formData.role, formData.tone),
        ats_score: calculateATSScore(formData.resume),
        strengths: identifyStrengths(formData.resume),
        weaknesses: identifyWeaknesses(formData.resume),
        keyword_gap: findKeywordGaps(formData.resume, formData.job_description),
        cover_letter: generateCoverLetter(formData.resume, formData.job_description, formData.role),
        linkedin_summary: generateLinkedInSummary(formData.resume, formData.role),
        tips: generateTips(formData.resume)
      };
      
      setAnalysis(mockAnalysis);
      setIsAnalyzing(false);
    }, 2000);
  };

  const copyToClipboard = () => {
    if (analysis) {
      navigator.clipboard.writeText(JSON.stringify(analysis, null, 2));
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  // Helper functions (same as before)
  const generateImprovedResume = (resume: string, jobDescription: string, role: string, tone: string) => {
    const actionVerbs = ['Led', 'Managed', 'Developed', 'Implemented', 'Optimized', 'Designed', 'Built', 'Created', 'Delivered'];
    let improved = resume;
    
    improved = `**PROFESSIONAL SUMMARY**
Results-driven ${role || 'professional'} with expertise in delivering high-impact solutions and driving measurable business outcomes.

**CORE COMPETENCIES**
• Technical Leadership & Project Management
• Cross-functional Collaboration & Stakeholder Engagement  
• Process Optimization & Performance Enhancement
• Strategic Planning & Implementation

**PROFESSIONAL EXPERIENCE**

${improved.split('\n').map(line => {
  if (line.trim()) {
    const randomVerb = actionVerbs[Math.floor(Math.random() * actionVerbs.length)];
    return `• ${randomVerb} ${line.toLowerCase().replace(/^[a-z]/, char => char.toUpperCase())}`;
  }
  return line;
}).join('\n')}

**EDUCATION & CERTIFICATIONS**
[Include relevant education and professional certifications]

**TECHNICAL SKILLS**
[List relevant technical competencies based on role requirements]`;

    return improved;
  };

  const calculateATSScore = (resume: string) => {
    let score = 60;
    if (resume.includes('•') || resume.includes('-')) score += 5;
    if (resume.match(/\b(led|managed|developed|implemented|designed|built|created|delivered)\b/gi)) score += 10;
    if (resume.match(/\d+%|\d+\$|\d+k|\d+ years?/gi)) score += 15;
    if (resume.length > 300) score += 10;
    return Math.min(score, 98);
  };

  const identifyStrengths = (resume: string) => {
    const strengths = [];
    if (resume.match(/\d+%|\d+\$|\d+k/gi)) {
      strengths.push('Includes quantifiable achievements and metrics');
    }
    if (resume.match(/\b(led|managed|leadership|team)\b/gi)) {
      strengths.push('Demonstrates leadership and management experience');
    }
    if (resume.length > 200) {
      strengths.push('Comprehensive content with sufficient detail');
    }
    if (resume.match(/\b(certified|certification|degree|education)\b/gi)) {
      strengths.push('Shows educational background and professional development');
    }
    return strengths.length > 0 ? strengths : ['Shows relevant experience in the field', 'Clear communication of responsibilities'];
  };

  const identifyWeaknesses = (resume: string) => {
    const weaknesses = [];
    if (!resume.match(/\d+%|\d+\$|\d+k/gi)) {
      weaknesses.push('Lacks quantifiable achievements and measurable results');
    }
    if (!resume.match(/\b(led|managed|developed|implemented|designed|built|created|delivered)\b/gi)) {
      weaknesses.push('Missing strong action verbs to describe accomplishments');
    }
    if (resume.length < 150) {
      weaknesses.push('Content is too brief and lacks sufficient detail');
    }
    if (!resume.includes('•') && !resume.includes('-')) {
      weaknesses.push('Poor formatting - needs bullet points for better readability');
    }
    return weaknesses.length > 0 ? weaknesses : ['Could benefit from more specific examples', 'Consider adding more technical skills'];
  };

  const findKeywordGaps = (resume: string, jobDescription: string) => {
    if (!jobDescription) return ['No job description provided for keyword analysis'];
    const jobKeywords = jobDescription.toLowerCase().match(/\b[a-z]{3,}\b/g) || [];
    const resumeText = resume.toLowerCase();
    const missing = jobKeywords.filter(keyword => 
      !resumeText.includes(keyword) && 
      ['api', 'database', 'cloud', 'python', 'javascript', 'react', 'node', 'sql', 'aws', 'docker'].includes(keyword)
    );
    return missing.length > 0 ? missing.slice(0, 5) : ['Strong keyword alignment with job requirements'];
  };

  const generateCoverLetter = (resume: string, jobDescription: string, role: string) => {
    return `Dear Hiring Manager,

I am writing to express my strong interest in the ${role || 'position'} at your organization. With my proven track record of delivering results and driving innovation, I am confident that I would be a valuable addition to your team.

In my previous roles, I have successfully managed complex projects, collaborated with cross-functional teams, and consistently exceeded performance targets. My experience aligns well with your requirements, and I am particularly excited about the opportunity to contribute to your organization's continued growth and success.

I am eager to discuss how my skills and experience can benefit your team. Thank you for considering my application, and I look forward to hearing from you soon.

Sincerely,
[Your Name]`;
  };

  const generateLinkedInSummary = (resume: string, role: string) => {
    return {
      headline: `${role || 'Professional'} | Results-Driven Leader | Innovation & Growth Specialist`,
      about: `Experienced ${role?.toLowerCase() || 'professional'} with a passion for driving results and creating innovative solutions. Proven track record of leading high-performing teams, optimizing processes, and delivering measurable business outcomes.

Key strengths include strategic planning, cross-functional collaboration, and technical expertise. Always seeking new challenges and opportunities to make a meaningful impact.

Open to connecting with like-minded professionals and exploring exciting career opportunities.`
    };
  };

  const generateTips = (resume: string) => {
    return [
      'Add specific metrics and percentages to quantify achievements',
      'Use strong action verbs like "Led", "Managed", "Implemented"',
      'Include relevant keywords from the job description',
      'Format with bullet points for better ATS scanning',
      'Add a professional summary at the top',
      'Include relevant certifications and technical skills',
      'Tailor content to match the specific role requirements'
    ];
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header isAuthenticated={true} onLogout={onLogout} />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Welcome back, {user?.name}!</h1>
          <p className="text-gray-600 mt-2">Transform your resume with AI-powered optimization</p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
            <div className="flex items-center">
              <div className="bg-blue-100 p-3 rounded-lg">
                <FileText className="h-6 w-6 text-blue-600" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Resumes Analyzed</p>
                <p className="text-2xl font-bold text-gray-900">12</p>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
            <div className="flex items-center">
              <div className="bg-green-100 p-3 rounded-lg">
                <TrendingUp className="h-6 w-6 text-green-600" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Avg ATS Score</p>
                <p className="text-2xl font-bold text-gray-900">87%</p>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
            <div className="flex items-center">
              <div className="bg-purple-100 p-3 rounded-lg">
                <Clock className="h-6 w-6 text-purple-600" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Time Saved</p>
                <p className="text-2xl font-bold text-gray-900">24h</p>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
            <div className="flex items-center">
              <div className="bg-orange-100 p-3 rounded-lg">
                <Target className="h-6 w-6 text-orange-600" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Plan</p>
                <p className="text-2xl font-bold text-gray-900">{user?.plan}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Resume Analyzer */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6 flex items-center">
              <Zap className="h-6 w-6 mr-2 text-blue-600" />
              Resume Analyzer
            </h2>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Resume Content *
                </label>
                <textarea
                  className="w-full h-40 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                  placeholder="Paste your resume content here..."
                  value={formData.resume}
                  onChange={(e) => setFormData({ ...formData, resume: e.target.value })}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Job Description (Optional)
                </label>
                <textarea
                  className="w-full h-32 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                  placeholder="Paste the job description to get targeted optimization..."
                  value={formData.job_description}
                  onChange={(e) => setFormData({ ...formData, job_description: e.target.value })}
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Target Role
                  </label>
                  <input
                    type="text"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="e.g., Software Engineer"
                    value={formData.role}
                    onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Tone
                  </label>
                  <select
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    value={formData.tone}
                    onChange={(e) => setFormData({ ...formData, tone: e.target.value })}
                  >
                    <option value="professional">Professional</option>
                    <option value="impactful">Impactful</option>
                    <option value="casual">Casual</option>
                  </select>
                </div>
              </div>

              <button
                onClick={analyzeResume}
                disabled={isAnalyzing || !formData.resume.trim()}
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 disabled:bg-gray-400 text-white font-semibold py-3 px-6 rounded-lg transition-colors flex items-center justify-center"
              >
                {isAnalyzing ? (
                  <>
                    <Zap className="animate-spin h-5 w-5 mr-2" />
                    Analyzing Resume...
                  </>
                ) : (
                  <>
                    <Target className="h-5 w-5 mr-2" />
                    Analyze & Optimize
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Results Display */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-semibold text-gray-900 flex items-center">
                <BarChart3 className="h-6 w-6 mr-2 text-blue-600" />
                Analysis Results
              </h2>
              {analysis && (
                <div className="flex space-x-2">
                  <button
                    onClick={copyToClipboard}
                    className="flex items-center px-3 py-1 bg-gray-100 hover:bg-gray-200 rounded-md text-sm text-gray-700 transition-colors"
                  >
                    {copied ? (
                      <>
                        <CheckCircle className="h-4 w-4 mr-1 text-green-600" />
                        Copied!
                      </>
                    ) : (
                      <>
                        <Copy className="h-4 w-4 mr-1" />
                        Copy
                      </>
                    )}
                  </button>
                  <button className="flex items-center px-3 py-1 bg-blue-100 hover:bg-blue-200 rounded-md text-sm text-blue-700 transition-colors">
                    <Download className="h-4 w-4 mr-1" />
                    Export
                  </button>
                </div>
              )}
            </div>

            {!analysis ? (
              <div className="text-center py-12">
                <FileText className="h-16 w-16 text-gray-300 mx-auto mb-4" />
                <p className="text-gray-500 text-lg">Enter your resume content and click analyze to see results</p>
              </div>
            ) : (
              <div className="space-y-6">
                {/* ATS Score */}
                <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-4 rounded-lg">
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-medium text-gray-700">ATS Compatibility Score</span>
                    <span className={`font-bold text-2xl ${
                      analysis.ats_score >= 80 ? 'text-green-600' : 
                      analysis.ats_score >= 60 ? 'text-yellow-600' : 'text-red-600'
                    }`}>
                      {analysis.ats_score}/100
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-3">
                    <div 
                      className={`h-3 rounded-full ${
                        analysis.ats_score >= 80 ? 'bg-green-500' : 
                        analysis.ats_score >= 60 ? 'bg-yellow-500' : 'bg-red-500'
                      }`}
                      style={{ width: `${analysis.ats_score}%` }}
                    ></div>
                  </div>
                </div>

                {/* Quick Stats */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-green-50 p-3 rounded-lg">
                    <div className="text-sm text-green-600 font-medium">Strengths</div>
                    <div className="text-lg font-bold text-green-700">{analysis.strengths.length}</div>
                  </div>
                  <div className="bg-red-50 p-3 rounded-lg">
                    <div className="text-sm text-red-600 font-medium">Areas to Improve</div>
                    <div className="text-lg font-bold text-red-700">{analysis.weaknesses.length}</div>
                  </div>
                </div>

                {/* JSON Output */}
                <div>
                  <h3 className="font-medium text-gray-700 mb-2">Complete Analysis (JSON Format)</h3>
                  <pre className="bg-gray-50 p-4 rounded-lg text-xs overflow-auto max-h-96 border">
                    <code>{JSON.stringify(analysis, null, 2)}</code>
                  </pre>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Quick Actions */}
        <div className="mt-8 bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <button className="flex items-center justify-center p-4 border-2 border-dashed border-gray-300 rounded-lg hover:border-blue-500 hover:bg-blue-50 transition-colors">
              <Plus className="h-5 w-5 mr-2 text-gray-500" />
              <span className="text-gray-700">New Resume Analysis</span>
            </button>
            <Link 
              to="/profile" 
              className="flex items-center justify-center p-4 border-2 border-dashed border-gray-300 rounded-lg hover:border-purple-500 hover:bg-purple-50 transition-colors"
            >
              <User className="h-5 w-5 mr-2 text-gray-500" />
              <span className="text-gray-700">Update Profile</span>
            </Link>
            <Link 
              to="/pricing" 
              className="flex items-center justify-center p-4 border-2 border-dashed border-gray-300 rounded-lg hover:border-green-500 hover:bg-green-50 transition-colors"
            >
              <Zap className="h-5 w-5 mr-2 text-gray-500" />
              <span className="text-gray-700">Upgrade Plan</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;