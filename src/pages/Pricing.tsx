import React from 'react';
import { Check, Zap, Crown, Star } from 'lucide-react';
import Footer from '../components/Footer';

const Pricing: React.FC = () => {
  const plans = [
    {
      name: 'Free',
      price: '$0',
      period: 'forever',
      description: 'Perfect for trying out our AI resume optimizer',
      features: [
        '3 resume analyses per month',
        'Basic ATS scoring',
        'Standard templates',
        'Email support',
        'Basic keyword optimization'
      ],
      buttonText: 'Get Started Free',
      buttonStyle: 'border-2 border-gray-300 text-gray-700 hover:border-blue-600 hover:text-blue-600',
      popular: false
    },
    {
      name: 'Pro',
      price: '$19',
      period: 'per month',
      description: 'Best for job seekers who want professional results',
      features: [
        'Unlimited resume analyses',
        'Advanced ATS optimization',
        'Premium templates',
        'Cover letter generator',
        'LinkedIn profile optimization',
        'Priority email support',
        'Keyword gap analysis',
        'Industry-specific suggestions'
      ],
      buttonText: 'Start Pro Trial',
      buttonStyle: 'bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700',
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$49',
      period: 'per month',
      description: 'For teams and organizations',
      features: [
        'Everything in Pro',
        'Team collaboration tools',
        'Bulk resume processing',
        'Custom branding',
        'API access',
        'Dedicated account manager',
        'Custom integrations',
        'Advanced analytics',
        'White-label solution'
      ],
      buttonText: 'Contact Sales',
      buttonStyle: 'border-2 border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white',
      popular: false
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 pt-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Choose Your Perfect Plan
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Transform your career with our AI-powered resume optimization. 
            Start free and upgrade when you're ready for more features.
          </p>
          <div className="flex items-center justify-center space-x-4 mb-8">
            <span className="text-gray-600">Monthly</span>
            <div className="relative">
              <input type="checkbox" className="sr-only" />
              <div className="w-12 h-6 bg-gray-300 rounded-full shadow-inner"></div>
              <div className="absolute left-1 top-1 w-4 h-4 bg-white rounded-full shadow transition-transform"></div>
            </div>
            <span className="text-gray-600">
              Yearly 
              <span className="ml-2 bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">
                Save 20%
              </span>
            </span>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <div
                key={index}
                className={`relative bg-white rounded-2xl shadow-lg border-2 p-8 ${
                  plan.popular 
                    ? 'border-blue-500 transform scale-105' 
                    : 'border-gray-200'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-medium flex items-center space-x-1">
                      <Star className="h-4 w-4" />
                      <span>Most Popular</span>
                    </div>
                  </div>
                )}

                <div className="text-center mb-8">
                  <div className="flex items-center justify-center mb-4">
                    {plan.name === 'Free' && (
                      <div className="bg-gray-100 p-3 rounded-lg">
                        <Zap className="h-8 w-8 text-gray-600" />
                      </div>
                    )}
                    {plan.name === 'Pro' && (
                      <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-3 rounded-lg">
                        <Crown className="h-8 w-8 text-white" />
                      </div>
                    )}
                    {plan.name === 'Enterprise' && (
                      <div className="bg-purple-100 p-3 rounded-lg">
                        <Star className="h-8 w-8 text-purple-600" />
                      </div>
                    )}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                  <div className="mb-4">
                    <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                    <span className="text-gray-600 ml-2">/{plan.period}</span>
                  </div>
                  <p className="text-gray-600">{plan.description}</p>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-200 ${plan.buttonStyle}`}>
                  {plan.buttonText}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600">
              Everything you need to know about our pricing and features
            </p>
          </div>

          <div className="space-y-8">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Can I change my plan at any time?
              </h3>
              <p className="text-gray-600">
                Yes, you can upgrade or downgrade your plan at any time. Changes will be reflected in your next billing cycle.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Is there a free trial for the Pro plan?
              </h3>
              <p className="text-gray-600">
                Yes, we offer a 7-day free trial for the Pro plan. No credit card required to start your trial.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                What payment methods do you accept?
              </h3>
              <p className="text-gray-600">
                We accept all major credit cards (Visa, MasterCard, American Express) and PayPal for your convenience.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Do you offer refunds?
              </h3>
              <p className="text-gray-600">
                Yes, we offer a 30-day money-back guarantee. If you're not satisfied with our service, we'll provide a full refund.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Transform Your Resume?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Join thousands of professionals who've already upgraded their careers with ResumeAI Pro
          </p>
          <button className="bg-white text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors">
            Start Your Free Trial
          </button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Pricing;