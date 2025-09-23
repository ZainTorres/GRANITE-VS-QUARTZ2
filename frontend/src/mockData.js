// Mock data for Granite Impressions landing page

export const heroContent = {
  title: "Granite vs Quartz Countertops: Which is Best for Your Kansas City Kitchen?",
  subtitle: "Expert installation serving Olathe, Overland Park, and Kansas City Metro",
  description: "Compare materials, costs, and benefits to make the perfect choice for your dream kitchen."
};

export const comparisonData = {
  granite: {
    title: "Natural Granite",
    pros: [
      "Unique natural patterns - no two slabs identical",
      "Heat resistant to 1200°F",
      "Adds significant home value",
      "Timeless beauty and elegance",
      "Scratch resistant when sealed properly"
    ],
    cons: [
      "Requires periodic sealing every 1-2 years",
      "Can stain if not sealed properly", 
      "Natural stone may have fissures",
      "Heavier - may need cabinet reinforcement"
    ]
  },
  quartz: {
    title: "Engineered Quartz",
    pros: [
      "Non-porous surface - never needs sealing",
      "Consistent patterns and colors",
      "Stain and scratch resistant",
      "Low maintenance daily cleaning",
      "Wide variety of modern designs"
    ],
    cons: [
      "Can be damaged by excessive heat",
      "Limited outdoor use (UV sensitive)",
      "Visible seams in larger installations",
      "Higher upfront cost than granite"
    ]
  }
};

export const comparisonTable = {
  categories: [
    {
      name: "Durability",
      granite: "Excellent - Natural stone strength",
      quartz: "Excellent - Engineered consistency",
      winner: "tie"
    },
    {
      name: "Maintenance", 
      granite: "Medium - Requires sealing",
      quartz: "Low - No sealing needed",
      winner: "quartz"
    },
    {
      name: "Cost Range",
      granite: "$40-80 per sq ft installed",
      quartz: "$50-90 per sq ft installed", 
      winner: "granite"
    },
    {
      name: "Heat Resistance",
      granite: "Excellent - up to 1200°F",
      quartz: "Good - avoid hot pans",
      winner: "granite"
    },
    {
      name: "Stain Resistance", 
      granite: "Good when sealed properly",
      quartz: "Excellent - non-porous",
      winner: "quartz"
    },
    {
      name: "Design Variety",
      granite: "Natural patterns vary",
      quartz: "Consistent engineered designs",
      winner: "tie"
    }
  ]
};

export const useCases = [
  {
    title: "Busy Family Kitchens",
    description: "High-traffic kitchens need durability and easy maintenance",
    bestChoice: "quartz",
    reason: "Non-porous surface resists stains and bacteria without sealing",
    image: "/api/placeholder/400/300"
  },
  {
    title: "Luxury Remodels", 
    description: "Showcase unique natural beauty and timeless elegance",
    bestChoice: "granite",
    reason: "Unique natural patterns create one-of-a-kind luxury appeal",
    image: "/api/placeholder/400/300"
  },
  {
    title: "Rental Properties",
    description: "Low maintenance with tenant-proof durability", 
    bestChoice: "quartz",
    reason: "Minimal upkeep and consistent appearance over time",
    image: "/api/placeholder/400/300"
  }
];

export const faqData = [
  {
    question: "Does granite stain easily?",
    answer: "Properly sealed granite is highly stain-resistant. We recommend sealing every 1-2 years to maintain optimal protection against spills and stains."
  },
  {
    question: "Can I put hot pans on quartz countertops?",
    answer: "While quartz is heat-resistant, we recommend using trivets or hot pads for pans over 300°F to prevent potential discoloration or thermal shock."
  },
  {
    question: "Which is better for Kansas City's climate?",
    answer: "Both materials perform excellently in Kansas City's climate. Granite handles temperature fluctuations naturally, while quartz maintains consistent appearance year-round."
  },
  {
    question: "How long does installation take?",
    answer: "Most installations are completed in 1-2 days. We template your kitchen, fabricate at our Olathe facility, then install with minimal disruption to your daily routine."
  },
  {
    question: "What's included in your free quote?",
    answer: "Our comprehensive quote includes material, fabrication, installation, edge treatments, and cleanup. We also provide samples to take home for your decision."
  }
];

export const testimonials = [
  {
    name: "Sarah Johnson",
    location: "Overland Park, KS", 
    rating: 5,
    text: "Granite Impressions transformed our kitchen with beautiful quartz countertops. The installation was flawless and their team was incredibly professional.",
    material: "Quartz"
  },
  {
    name: "Mike Rodriguez",
    location: "Olathe, KS",
    rating: 5, 
    text: "We chose granite for our kitchen remodel and couldn't be happier. The natural patterns are stunning and the quality is exceptional.",
    material: "Granite"
  },
  {
    name: "Lisa Chen", 
    location: "Shawnee, KS",
    rating: 5,
    text: "Best countertop installation experience in Kansas City. They helped us choose between granite and quartz, and we love our final choice!",
    material: "Granite"
  }
];

export const serviceAreas = [
  "Olathe", "Overland Park", "Shawnee", "Lenexa", 
  "Lee's Summit", "Kansas City", "Prairie Village",
  "Leawood", "Mission", "Merriam"
];

export const companyInfo = {
  name: "Granite Impressions", 
  phone: "(913) 555-0123",
  email: "info@graniteimpressions.com",
  address: "123 Stone Way, Olathe, KS 66061",
  hours: "Monday-Friday 8AM-6PM, Saturday 9AM-4PM"
};