import React from 'react';
import { Link } from 'react-router-dom';
import { 
  FileText, 
  Zap, 
  Target, 
  Users, 
  CheckCircle, 
  Star,
  ArrowRight,
  BarChart3,
  Shield,
  Clock
} from 'lucide-react';
import Footer from '../components/Footer';

const LandingPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900">
      {/* Hero Section */}
      <section className="relative py-20 pt-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Transform Your Resume with{' '}
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                AI Power
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Get noticed by employers with our advanced AI resume optimizer. Beat ATS systems, 
              highlight your strengths, and land your dream job faster than ever before.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/signup" 
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-200 flex items-center justify-center space-x-2"
              >
                <Zap className="h-5 w-5" />
                <span>Start Free Trial</span>
              </Link>
              <Link 
                to="/features" 
                className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-lg text-lg font-semibold hover:border-blue-600 hover:text-blue-600 transition-all duration-200 flex items-center justify-center space-x-2"
              >
                <span>Learn More</span>
                <ArrowRight className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-blue-400 mb-2">50K+</div>
              <div className="text-gray-300">Resumes Optimized</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-purple-400 mb-2">95%</div>
              <div className="text-gray-300">ATS Pass Rate</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-green-400 mb-2">3x</div>
              <div className="text-gray-300">More Interviews</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-orange-400 mb-2">24/7</div>
              <div className="text-gray-300">AI Support</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Why Choose ResumeAI Pro?
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Our AI-powered platform provides everything you need to create a winning resume
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="bg-blue-500/20 w-12 h-12 rounded-lg flex items-center justify-center mb-6">
                <Target className="h-6 w-6 text-blue-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">ATS Optimization</h3>
              <p className="text-gray-300">
                Ensure your resume passes through Applicant Tracking Systems with our advanced optimization algorithms.
              </p>
            </div>

            <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="bg-purple-500/20 w-12 h-12 rounded-lg flex items-center justify-center mb-6">
                <Zap className="h-6 w-6 text-purple-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">AI-Powered Analysis</h3>
              <p className="text-gray-300">
                Get instant feedback on your resume with detailed analysis of strengths, weaknesses, and improvements.
              </p>
            </div>

            <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="bg-green-500/20 w-12 h-12 rounded-lg flex items-center justify-center mb-6">
                <FileText className="h-6 w-6 text-green-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Smart Formatting</h3>
              <p className="text-gray-300">
                Professional formatting with industry-standard layouts that recruiters love to see.
              </p>
            </div>

            <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="bg-orange-500/20 w-12 h-12 rounded-lg flex items-center justify-center mb-6">
                <BarChart3 className="h-6 w-6 text-orange-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Performance Metrics</h3>
              <p className="text-gray-300">
                Track your resume's performance with detailed analytics and improvement suggestions.
              </p>
            </div>

            <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="bg-red-500/20 w-12 h-12 rounded-lg flex items-center justify-center mb-6">
                <Shield className="h-6 w-6 text-red-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Privacy Protected</h3>
              <p className="text-gray-300">
                Your data is secure with enterprise-grade encryption and privacy protection.
              </p>
            </div>

            <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="bg-indigo-500/20 w-12 h-12 rounded-lg flex items-center justify-center mb-6">
                <Clock className="h-6 w-6 text-indigo-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Instant Results</h3>
              <p className="text-gray-300">
                Get your optimized resume in seconds, not hours. Fast turnaround for urgent applications.
              </p>
            </div>
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
              Transform your resume in just three simple steps
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white text-2xl font-bold">1</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Upload Your Resume</h3>
              <p className="text-gray-300">
                Simply paste your current resume content or upload your existing resume file.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-gradient-to-r from-purple-600 to-pink-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white text-2xl font-bold">2</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">AI Analysis</h3>
              <p className="text-gray-300">
                Our AI analyzes your resume against industry standards and job requirements.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-gradient-to-r from-pink-600 to-red-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white text-2xl font-bold">3</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Get Results</h3>
              <p className="text-gray-300">
                Receive your optimized resume, cover letter, and LinkedIn profile instantly.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              What Our Users Say
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Join thousands of professionals who've transformed their careers
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 p-8 rounded-xl shadow-lg">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-300 mb-6">
                "ResumeAI Pro helped me land my dream job at Google. The ATS optimization was incredible!"
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white font-semibold">
                  SJ
                </div>
                <div className="ml-4">
                  <div className="font-semibold text-white">Sarah Johnson</div>
                  <div className="text-gray-300 text-sm">Software Engineer at Google</div>
                </div>
              </div>
            </div>

            <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 p-8 rounded-xl shadow-lg">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-300 mb-6">
                "Increased my interview rate by 300%. The AI suggestions were spot-on and professional."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center text-white font-semibold">
                  MC
                </div>
                <div className="ml-4">
                  <div className="font-semibold text-white">Michael Chen</div>
                  <div className="text-gray-300 text-sm">Marketing Director</div>
                </div>
              </div>
            </div>

            <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 p-8 rounded-xl shadow-lg">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-300 mb-6">
                "The cover letter generator saved me hours of work. Professional and tailored perfectly."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gradient-to-r from-green-600 to-blue-600 rounded-full flex items-center justify-center text-white font-semibold">
                  ER
                </div>
                <div className="ml-4">
                  <div className="font-semibold text-white">Emily Rodriguez</div>
                  <div className="text-gray-300 text-sm">Data Scientist</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600/80 to-purple-600/80 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Transform Your Career?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join thousands of professionals who've already upgraded their resumes with AI
          </p>
          <Link 
            to="/signup" 
            className="bg-white text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center space-x-2"
          >
            <Zap className="h-5 w-5" />
            <span>Start Your Free Trial</span>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default LandingPage;