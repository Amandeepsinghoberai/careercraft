import React from 'react';
import { 
  Target, 
  Zap, 
  FileText, 
  BarChart3, 
  Shield, 
  Clock,
  CheckCircle,
  Users,
  Globe,
  Lightbulb
} from 'lucide-react';
import Footer from '../components/Footer';

const Features: React.FC = () => {
  const features = [
    {
      icon: Target,
      title: 'ATS Optimization',
      description: 'Ensure your resume passes through Applicant Tracking Systems with our advanced optimization algorithms that analyze formatting, keywords, and structure.',
      color: 'blue'
    },
    {
      icon: Zap,
      title: 'AI-Powered Analysis',
      description: 'Get instant feedback on your resume with detailed analysis of strengths, weaknesses, and personalized improvement suggestions powered by advanced AI.',
      color: 'purple'
    },
    {
      icon: FileText,
      title: 'Smart Formatting',
      description: 'Professional formatting with industry-standard layouts that recruiters love. Clean, modern designs that highlight your achievements effectively.',
      color: 'green'
    },
    {
      icon: BarChart3,
      title: 'Performance Metrics',
      description: 'Track your resume\'s performance with detailed analytics, ATS compatibility scores, and improvement tracking over time.',
      color: 'orange'
    },
    {
      icon: Shield,
      title: 'Privacy Protected',
      description: 'Your data is secure with enterprise-grade encryption and privacy protection. We never share your information with third parties.',
      color: 'red'
    },
    {
      icon: Clock,
      title: 'Instant Results',
      description: 'Get your optimized resume in seconds, not hours. Fast turnaround for urgent applications with real-time processing.',
      color: 'indigo'
    }
  ];

  const benefits = [
    {
      icon: CheckCircle,
      title: '95% ATS Pass Rate',
      description: 'Our optimized resumes have a 95% success rate in passing through ATS systems.'
    },
    {
      icon: Users,
      title: '3x More Interviews',
      description: 'Users report getting 3 times more interview calls after using our optimization.'
    },
    {
      icon: Globe,
      title: 'Global Standards',
      description: 'Resume formats that meet international hiring standards across industries.'
    },
    {
      icon: Lightbulb,
      title: 'Smart Suggestions',
      description: 'AI-powered recommendations tailored to your industry and experience level.'
    }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      blue: 'bg-blue-100 text-blue-600',
      purple: 'bg-purple-100 text-purple-600',
      green: 'bg-green-100 text-green-600',
      orange: 'bg-orange-100 text-orange-600',
      red: 'bg-red-100 text-red-600',
      indigo: 'bg-indigo-100 text-indigo-600'
    };
    return colors[color as keyof typeof colors] || 'bg-gray-100 text-gray-600';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900">
      {/* Debug Info */}
      <div className="fixed top-20 left-4 z-50 bg-red-600 text-white p-2 rounded">
        Features Page Loaded
      </div>
      {/* Hero Section */}
      <section className="py-20 pt-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Powerful Features for{' '}
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Resume Success
            </span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Discover how our AI-powered platform transforms ordinary resumes into 
            interview-winning documents that get noticed by employers and pass ATS systems.
          </p>
        </div>
      </section>

      {/* Main Features */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Everything You Need to Succeed
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Our comprehensive suite of tools ensures your resume stands out in today's competitive job market
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <div className={`w-12 h-12 rounded-lg flex items-center justify-center mb-6 ${
                  feature.color === 'blue' ? 'bg-blue-500/20' :
                  feature.color === 'purple' ? 'bg-purple-500/20' :
                  feature.color === 'green' ? 'bg-green-500/20' :
                  feature.color === 'orange' ? 'bg-orange-500/20' :
                  feature.color === 'red' ? 'bg-red-500/20' :
                  'bg-indigo-500/20'
                }`}>
                  <feature.icon className={`h-6 w-6 ${
                    feature.color === 'blue' ? 'text-blue-400' :
                    feature.color === 'purple' ? 'text-purple-400' :
                    feature.color === 'green' ? 'text-green-400' :
                    feature.color === 'orange' ? 'text-orange-400' :
                    feature.color === 'red' ? 'text-red-400' :
                    'text-indigo-400'
                  }`} />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">{feature.title}</h3>
                <p className="text-gray-300 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              How It Works
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Transform your resume in just three simple steps with our AI-powered optimization
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white text-2xl font-bold">1</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Upload Your Resume</h3>
              <p className="text-gray-300 mb-6">
                Simply paste your current resume content or upload your existing resume file. 
                Our system accepts all major formats.
              </p>
              <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 p-4 rounded-lg shadow-sm">
                <FileText className="h-8 w-8 text-gray-400 mx-auto mb-2" />
                <p className="text-sm text-gray-400">Supports PDF, DOC, DOCX, TXT</p>
              </div>
            </div>

            <div className="text-center">
              <div className="bg-gradient-to-r from-purple-600 to-pink-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white text-2xl font-bold">2</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">AI Analysis & Optimization</h3>
              <p className="text-gray-300 mb-6">
                Our advanced AI analyzes your resume against industry standards, ATS requirements, 
                and job market trends to identify improvements.
              </p>
              <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 p-4 rounded-lg shadow-sm">
                <Zap className="h-8 w-8 text-purple-400 mx-auto mb-2" />
                <p className="text-sm text-gray-400">Processing takes 2-3 seconds</p>
              </div>
            </div>

            <div className="text-center">
              <div className="bg-gradient-to-r from-pink-600 to-red-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white text-2xl font-bold">3</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Get Optimized Results</h3>
              <p className="text-gray-300 mb-6">
                Receive your improved resume, detailed analysis, cover letter, and LinkedIn 
                optimization suggestions instantly.
              </p>
              <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 p-4 rounded-lg shadow-sm">
                <Target className="h-8 w-8 text-green-400 mx-auto mb-2" />
                <p className="text-sm text-gray-400">Complete package delivered</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Proven Results That Matter
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Join thousands of professionals who've transformed their careers with our platform
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="bg-gradient-to-r from-blue-600 to-purple-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <benefit.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-3">{benefit.title}</h3>
                <p className="text-gray-300">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Feature Breakdown */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              What You Get With Every Analysis
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">Comprehensive Resume Analysis</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-400 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-white">ATS Compatibility Score</h4>
                    <p className="text-gray-300">Get a detailed score showing how well your resume will perform with ATS systems</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-400 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-white">Strengths & Weaknesses</h4>
                    <p className="text-gray-300">Identify what's working well and what needs improvement in your current resume</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-400 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-white">Keyword Gap Analysis</h4>
                    <p className="text-gray-300">Discover missing keywords that could help you get past ATS filters</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-400 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-white">Actionable Tips</h4>
                    <p className="text-gray-300">Receive specific, actionable suggestions to improve your resume's impact</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 p-8 rounded-xl shadow-lg">
              <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 p-6 rounded-lg mb-6">
                <div className="flex justify-between items-center mb-4">
                  <span className="font-medium text-gray-300">ATS Compatibility Score</span>
                  <span className="font-bold text-2xl text-green-400">87/100</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-3">
                  <div className="h-3 rounded-full bg-green-500" style={{ width: '87%' }}></div>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-gray-300">Strengths Identified</span>
                  <span className="font-semibold text-green-400">5</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-300">Areas to Improve</span>
                  <span className="font-semibold text-orange-400">3</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-300">Missing Keywords</span>
                  <span className="font-semibold text-red-400">7</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600/80 to-purple-600/80 backdrop-blur-sm">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Transform Your Resume?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join thousands of professionals who've already upgraded their resumes and landed their dream jobs
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors">
              Start Free Analysis
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
              View Pricing
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Features;