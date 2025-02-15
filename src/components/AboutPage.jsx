import React from 'react';
import { MapPin, Phone, Mail, Calendar, Users, Trophy } from 'lucide-react';
import { Card, CardContent } from './Card';

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      {/* Hero Section */}
      

      {/* Main Content */}
      <div className="container mx-auto px-4">
        {/* About Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">About Us</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <p className="text-gray-600 leading-relaxed mb-4">
                Founded on January 1st, 2024, Vijnjodaya Arts and Sports Club is dedicated to promoting cultural activities and sports excellence in Kottur. Our mission is to provide a platform for local talent to flourish and create a vibrant community space for everyone.
              </p>
              <p className="text-gray-600 leading-relaxed">
                We offer various programs in both arts and sports, catering to all age groups and skill levels. Our facility serves as a hub for cultural events, sports training, and community gatherings.
              </p>
            </div>
            <Card className="p-6">
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Calendar className="text-blue-600" />
                    <div>
                      <p className="font-medium">Established</p>
                      <p className="text-gray-600">January 1, 2024</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <MapPin className="text-blue-600" />
                    <div>
                      <p className="font-medium">Location</p>
                      <p className="text-gray-600">Kottur</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Users className="text-blue-600" />
                    <div>
                      <p className="font-medium">Community Focus</p>
                      <p className="text-gray-600">Arts & Sports Development</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Programs Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Our Programs</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="p-6">
              <CardContent>
                <h3 className="text-xl font-bold mb-3">Arts Programs</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Traditional Dance Classes</li>
                  <li>• Music Training</li>
                  <li>• Visual Arts Workshops</li>
                  <li>• Theater Productions</li>
                </ul>
              </CardContent>
            </Card>
            <Card className="p-6">
              <CardContent>
                <h3 className="text-xl font-bold mb-3">Sports Programs</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Cricket Training</li>
                  <li>• Volleyball</li>
                  <li>• Badminton</li>
                  <li>• Athletics</li>
                </ul>
              </CardContent>
            </Card>
            <Card className="p-6">
              <CardContent>
                <h3 className="text-xl font-bold mb-3">Community Events</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Cultural Festivals</li>
                  <li>• Sports Tournaments</li>
                  <li>• Youth Programs</li>
                  <li>• Community Gatherings</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Contact Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Contact Us</h2>
          <Card className="p-6">
            <CardContent>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="flex items-center gap-3">
                  <Phone className="text-blue-600" />
                  <div>
                    <p className="font-medium">Phone</p>
                    <p className="text-gray-600">+91 XXXXX XXXXX</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="text-blue-600" />
                  <div>
                    <p className="font-medium">Email</p>
                    <p className="text-gray-600">contact@vijnjodaya.org</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="text-blue-600" />
                  <div>
                    <p className="font-medium">Address</p>
                    <p className="text-gray-600">Kottur, Kerala</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  );
};

export default AboutPage;