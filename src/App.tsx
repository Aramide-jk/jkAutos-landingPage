import { useState, FormEvent } from "react";
import {
  MessageCircle,
  CheckCircle,
  Search,
  FileCheck,
  Handshake,
  Shield,
  Clock,
  Star,
} from "lucide-react";

function App() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    location: "",
    budget: "",
    customBudget: "",
    model: "",
    condition: "",
    transmission: "",
    timeline: "",
    notes: "",
  });

  const whatsappNumber = "2348130135756";
  const whatsappLink = `https://wa.me/${whatsappNumber}`;

  const handleQuickChat = () => {
    const message = encodeURIComponent("Hello, I want help sourcing a car.");
    window.open(`${whatsappLink}?text=${message}`, "_blank");
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    const message = `Hello, I want a car.

*Name:* ${formData.name}
*Phone:* ${formData.phone}
*Location:* ${formData.location}
*Budget:* ${formData.budget}${formData.customBudget ? ` (Custom: ${formData.customBudget})` : ""}
*Model:* ${formData.model}
*Condition:* ${formData.condition}
*Transmission:* ${formData.transmission}
*Timeline:* ${formData.timeline}

Notes: ${formData.notes || "None"}`;

    const encodedMessage = encodeURIComponent(message);
    window.open(`${whatsappLink}?text=${encodedMessage}`, "_blank");
  };

  const scrollToForm = () => {
    document
      .getElementById("request-form")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-stone-50">
      <div className="fixed bottom-6 right-6 z-50 md:hidden">
        <button
          onClick={handleQuickChat}
          className="bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
          aria-label="Chat on WhatsApp">
          <MessageCircle className="w-6 h-6" />
        </button>
      </div>

      <section className="bg-gradient-to-br from-neutral-900 via-neutral-800 to-neutral-900 text-stone-100 py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Find the Right Car{" "}
            <span className="text-red-600">Within Your Budget</span>
          </h1>
          <p className="text-lg md:text-xl text-stone-300 mb-10 max-w-2xl mx-auto">
            I help you source verified Nigerian-used and Tokunbo cars based on
            your budget, location, and preferences.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={handleQuickChat}
              className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-lg font-semibold text-lg flex items-center justify-center gap-2 transition-all duration-300 hover:scale-105 shadow-lg">
              <MessageCircle className="w-5 h-5" />
              Chat on WhatsApp Now
            </button>
            <button
              onClick={scrollToForm}
              className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:scale-105 shadow-lg">
              Request a Car
            </button>
          </div>
        </div>
      </section>

      <section className="py-16 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center p-6 rounded-lg bg-stone-50 border border-stone-200">
              <div className="bg-neutral-900 w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4">
                <Search className="w-7 h-7 text-red-600" />
              </div>
              <p className="text-neutral-900 font-medium">
                Verified vehicle sourcing
              </p>
            </div>
            <div className="text-center p-6 rounded-lg bg-stone-50 border border-stone-200">
              <div className="bg-neutral-900 w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4">
                <FileCheck className="w-7 h-7 text-red-600" />
              </div>
              <p className="text-neutral-900 font-medium">Inspection support</p>
            </div>
            <div className="text-center p-6 rounded-lg bg-stone-50 border border-stone-200">
              <div className="bg-neutral-900 w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4">
                <Handshake className="w-7 h-7 text-red-600" />
              </div>
              <p className="text-neutral-900 font-medium">
                Price negotiation help
              </p>
            </div>
            <div className="text-center p-6 rounded-lg bg-stone-50 border border-stone-200">
              <div className="bg-neutral-900 w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-7 h-7 text-red-600" />
              </div>
              <p className="text-neutral-900 font-medium">
                Transparent process
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-stone-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-neutral-900 mb-16">
            How It Works
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-red-600 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                1
              </div>
              <h3 className="text-xl font-semibold text-neutral-900 mb-3">
                Submit Your Request
              </h3>
              <p className="text-neutral-700">
                Submit your car request with your budget and preferences
              </p>
            </div>
            <div className="text-center">
              <div className="bg-red-600 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                2
              </div>
              <h3 className="text-xl font-semibold text-neutral-900 mb-3">
                Vehicle Sourcing
              </h3>
              <p className="text-neutral-700">
                I source and verify available options for you
              </p>
            </div>
            <div className="text-center">
              <div className="bg-red-600 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                3
              </div>
              <h3 className="text-xl font-semibold text-neutral-900 mb-3">
                Safe Closure
              </h3>
              <p className="text-neutral-700">
                We inspect, negotiate, and close safely
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* <section className="py-16 px-6 bg-gradient-to-r from-green-500 to-green-600">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Need a car fast?
          </h2>
          <p className="text-lg text-green-50 mb-8">
            Chat with me directly on WhatsApp and tell me what you need.
          </p>
          <button
            onClick={handleQuickChat}
            className="bg-white hover:bg-stone-100 text-green-600 px-8 py-4 rounded-lg font-semibold text-lg flex items-center justify-center gap-2 mx-auto transition-all duration-300 hover:scale-105 shadow-lg">
            <MessageCircle className="w-5 h-5" />
            Start WhatsApp Chat
          </button>
        </div>
      </section> */}

      <section id="request-form" className="py-20 px-6 bg-white">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-neutral-900 mb-4">
            Car Request Form
          </h2>
          <p className="text-center text-neutral-600 mb-10">
            Fill this short form and your request will be sent directly to
            WhatsApp.
          </p>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-neutral-900 font-medium mb-2">
                Name *
              </label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                className="w-full px-4 py-3 border border-stone-300 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-transparent outline-none"
              />
            </div>

            <div>
              <label className="block text-neutral-900 font-medium mb-2">
                Phone Number *
              </label>
              <input
                type="tel"
                required
                value={formData.phone}
                onChange={(e) =>
                  setFormData({ ...formData, phone: e.target.value })
                }
                className="w-full px-4 py-3 border border-stone-300 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-transparent outline-none"
              />
            </div>

            <div>
              <label className="block text-neutral-900 font-medium mb-2">
                Location (City/State) *
              </label>
              <input
                type="text"
                required
                value={formData.location}
                onChange={(e) =>
                  setFormData({ ...formData, location: e.target.value })
                }
                className="w-full px-4 py-3 border border-stone-300 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-transparent outline-none"
              />
            </div>

            <div>
              <label className="block text-neutral-900 font-medium mb-2">
                Budget Range *
              </label>
              <select
                required
                value={formData.budget}
                onChange={(e) =>
                  setFormData({ ...formData, budget: e.target.value })
                }
                className="w-full px-4 py-3 border border-stone-300 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-transparent outline-none mb-3">
                <option value="">Select budget range</option>
                <option value="Under ₦3M">Under ₦3M</option>
                <option value="₦3M–₦5M">₦3M–₦5M</option>
                <option value="₦5M–₦8M">₦5M–₦8M</option>
                <option value="₦8M+">₦8M+</option>
              </select>
              <input
                type="text"
                value={formData.customBudget}
                onChange={(e) =>
                  setFormData({ ...formData, customBudget: e.target.value })
                }
                placeholder="Or enter custom amount (e.g., ₦4.5M, $15,000)"
                className="w-full px-4 py-3 border border-stone-300 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-transparent outline-none"
              />
            </div>

            <div>
              <label className="block text-neutral-900 font-medium mb-2">
                Preferred Car Model *
              </label>
              <input
                type="text"
                required
                value={formData.model}
                onChange={(e) =>
                  setFormData({ ...formData, model: e.target.value })
                }
                placeholder="e.g., Toyota Camry, Honda Accord"
                className="w-full px-4 py-3 border border-stone-300 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-transparent outline-none"
              />
            </div>

            <div>
              <label className="block text-neutral-900 font-medium mb-2">
                Condition
              </label>
              <select
                value={formData.condition}
                onChange={(e) =>
                  setFormData({ ...formData, condition: e.target.value })
                }
                className="w-full px-4 py-3 border border-stone-300 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-transparent outline-none">
                <option value="">Select condition</option>
                <option value="Tokunbo">Tokunbo</option>
                <option value="Nigerian Used">Nigerian Used</option>
                <option value="Either">Either</option>
              </select>
            </div>

            <div>
              <label className="block text-neutral-900 font-medium mb-2">
                Transmission
              </label>
              <select
                value={formData.transmission}
                onChange={(e) =>
                  setFormData({ ...formData, transmission: e.target.value })
                }
                className="w-full px-4 py-3 border border-stone-300 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-transparent outline-none">
                <option value="">Select transmission</option>
                <option value="Automatic">Automatic</option>
                <option value="Manual">Manual</option>
                <option value="Any">Any</option>
              </select>
            </div>

            <div>
              <label className="block text-neutral-900 font-medium mb-2">
                Timeline
              </label>
              <select
                value={formData.timeline}
                onChange={(e) =>
                  setFormData({ ...formData, timeline: e.target.value })
                }
                className="w-full px-4 py-3 border border-stone-300 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-transparent outline-none">
                <option value="">Select timeline</option>
                <option value="Urgent">Urgent</option>
                <option value="Within 1–2 weeks">Within 1–2 weeks</option>
                <option value="Flexible">Flexible</option>
              </select>
            </div>

            <div>
              <label className="block text-neutral-900 font-medium mb-2">
                Extra Notes (Optional)
              </label>
              <textarea
                value={formData.notes}
                onChange={(e) =>
                  setFormData({ ...formData, notes: e.target.value })
                }
                rows={4}
                className="w-full px-4 py-3 border border-stone-300 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-transparent outline-none resize-none"
                placeholder="Any additional requirements or preferences..."
              />
            </div>

            <button
              type="submit"
              className="w-full bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-lg font-semibold text-lg flex items-center justify-center gap-2 transition-all duration-300 hover:scale-105 shadow-lg">
              <MessageCircle className="w-5 h-5" />
              Send Request via WhatsApp
            </button>
          </form>
        </div>
      </section>

      <section className="py-20 px-6 bg-neutral-900 text-stone-100">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">About Me</h2>
          <p className="text-lg text-stone-300 mb-8 leading-relaxed">
            I am a car sourcing and vehicle brokerage consultant. I help clients
            find reliable cars within their budget while avoiding common buying
            mistakes. My goal is to make car buying safer, clearer, and more
            transparent.
          </p>
          <div className="space-y-2 text-stone-300">
            <p className="text-xl font-semibold text-white">
              Car Broker / Vehicle Sourcing Consultant
            </p>
            <p className="flex items-center justify-center gap-2">
              <MessageCircle className="w-5 h-5 text-green-500" />
              WhatsApp: +234 8130135756
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 px-6 bg-stone-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-neutral-900 mb-12">
            Client Feedback
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>
              <p className="text-neutral-700 mb-4">
                "Smooth process and honest inspection."
              </p>
              <p className="text-neutral-500 font-medium">
                — Client Testimonial
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>
              <p className="text-neutral-700 mb-4">
                "Helped me find a clean car within my budget."
              </p>
              <p className="text-neutral-500 font-medium">
                — Client Testimonial
              </p>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-neutral-900 text-stone-300 py-8 px-6 text-center">
        <p className="text-lg font-semibold text-white mb-2">
          Car Sourcing & Brokerage Services
        </p>
        <p className="mb-1">WhatsApp: +234 8130135756</p>
        <p className="text-sm">Available: Mon–Sat</p>
      </footer>
    </div>
  );
}

export default App;
