import React, { useState, useEffect } from 'react';
import { Search, Plus, Tag, Calendar, Filter, BookOpen, Lightbulb, Zap } from 'lucide-react';

const DynamicLexicon = () => {
  const [entries, setEntries] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [isAddingEntry, setIsAddingEntry] = useState(false);
  const [newEntry, setNewEntry] = useState({
    term: '',
    definition: '',
    category: 'concept',
    context: '',
    relatedTerms: '',
    examples: ''
  });

  // Initialize with sample entries from your preferences
  useEffect(() => {
    const initialEntries = [
      // Original MVP concepts
      {
        id: 1,
        term: "Overshoot AI Utility MVP",
        definition: "A scaffold for live experimentation that lets local communities interact with a live model of their resource consumption and tune variables in real time",
        category: "project",
        context: "Phase 1 Lovable-ready build for UNE presentation",
        relatedTerms: ["Live Energy Tracker", "Scenario Quiz", "Local AI"],
        examples: ["Energy, Water, Soil, and Waste counters", "Community-specific scenarios"],
        dateAdded: new Date().toLocaleDateString()
      },
      {
        id: 2,
        term: "Live Energy Tracker",
        definition: "Interactive dashboard showing solar generation, battery storage vs grid use with scenario toggles",
        category: "feature",
        context: "Page 2 recommended next step",
        relatedTerms: ["Solar Generation", "Battery Storage", "Scenario Toggle"],
        examples: ["Cloudy day vs sunny day scenarios", "Household vs commercial use"],
        dateAdded: new Date().toLocaleDateString()
      },
      {
        id: 3,
        term: "AI Agent Mesh",
        definition: "Network of specialized AI agents for different sustainability domains",
        category: "architecture",
        context: "Future page development option",
        relatedTerms: ["SolarSaver", "Penny Pincher", "Soil Guardian"],
        examples: ["SolarSaver for energy optimization", "Soil Guardian for agricultural monitoring"],
        dateAdded: new Date().toLocaleDateString()
      },
      // Core Altruistic AI Platform
      {
        id: 4,
        term: "Altruistic AI Platform",
        definition: "Lightweight, explainable energy optimization platform that retrofits into existing infrastructure with behavioral pattern recognition",
        category: "project",
        context: "Core solution for ethical AI in energy management",
        relatedTerms: ["Explainable AI", "Behavioral Pattern Recognition", "Living Laboratory"],
        examples: ["15-30% utility cost reduction", "$250K-400K annual savings", "Zero CAPEX requirements"],
        dateAdded: new Date().toLocaleDateString()
      },
      {
        id: 5,
        term: "Living Laboratory",
        definition: "Institutions transformed into real-world testing environments where AI is visible, understandable, and accountable",
        category: "concept",
        context: "Broader vision for responsible innovation",
        relatedTerms: ["Responsible Innovation", "Ethical AI", "Proof of Concept"],
        examples: ["Universities as AI testing grounds", "Municipal buildings as demonstration sites"],
        dateAdded: new Date().toLocaleDateString()
      },
      {
        id: 6,
        term: "Reality Filter",
        definition: "Transparent, verifiable AI system that labels outputs as Verified, Speculative, or Unverified with confidence intervals",
        category: "framework",
        context: "Trust-building mechanism for AI transparency",
        relatedTerms: ["Truth Seekers", "AI Transparency", "94% Trust Improvement"],
        examples: ["Campus solar panels generated 2,847 kWh yesterday - Source: Utility meter"],
        dateAdded: new Date().toLocaleDateString()
      },
      {
        id: 7,
        term: "Minimum Viable Civilization",
        definition: "Building sustainable and resilient civic systems where AI contributes to human well-being and planetary health within 1.18 ha footprint",
        category: "vision",
        context: "Ultimate goal of Altruistic AI ecosystem",
        relatedTerms: ["1.18 ha Target", "Planetary Boundaries", "Sustainable Footprint"],
        examples: ["15 domains tracked", "Food, Mobility, Energy, Goods, Water, Waste optimization"],
        dateAdded: new Date().toLocaleDateString()
      },
      // Strategic Imperatives
      {
        id: 8,
        term: "Pilot Program Expansion",
        definition: "Strategic initiative to secure institutional partners across universities, municipal buildings, hospitals, libraries for real-world validation",
        category: "strategy",
        context: "Priority #1 strategic imperative",
        relatedTerms: ["ROI Validation", "Real-World Data", "Iterative Refinement"],
        examples: ["Universities", "Municipal buildings", "Hospitals", "Smart city initiatives"],
        dateAdded: new Date().toLocaleDateString()
      },
      {
        id: 9,
        term: "Modular Development Prioritization",
        definition: "Building core Proof-of-Concept AI Toolkit as foundational element enabling rapid iteration and vertical customization",
        category: "strategy",
        context: "Development approach for scalability",
        relatedTerms: ["API-First Design", "Vertical Solutions", "Rapid Iteration"],
        examples: ["Home Energy Manager", "Campus Dashboard", "Healthcare Steward"],
        dateAdded: new Date().toLocaleDateString()
      },
      {
        id: 10,
        term: "Proof-of-Concept AI Toolkit",
        definition: "Modular software foundation allowing businesses to integrate Altruistic AI's explainable framework into their sustainability solutions",
        category: "tool",
        context: "Core product enabling ecosystem expansion",
        relatedTerms: ["Modular Architecture", "API Integration", "Explainable Framework"],
        examples: ["Building management system integration", "Smart infrastructure deployment"],
        dateAdded: new Date().toLocaleDateString()
      },
      // Product Applications
      {
        id: 11,
        term: "Altruistic Home Energy Manager",
        definition: "Consumer-grade platform for smart homes offering explainable energy optimization with cost reduction and CO2 tracking",
        category: "feature",
        context: "Direct application for residential market",
        relatedTerms: ["Smart Home Integration", "Google Home", "Amazon Alexa"],
        examples: ["Turn off lights in living room - saves $0.05/hour", "30-minute occupancy detection"],
        dateAdded: new Date().toLocaleDateString()
      },
      {
        id: 12,
        term: "Altruistic Campus Sustainability Dashboard",
        definition: "Specialized platform for universities providing granular energy insights by building, department, or classroom with gamification",
        category: "feature",
        context: "Educational sector application",
        relatedTerms: ["Gamification", "Student Engagement", "AI Training Modules"],
        examples: ["Building-level energy tracking", "Department comparisons", "Student competitions"],
        dateAdded: new Date().toLocaleDateString()
      },
      {
        id: 13,
        term: "Altruistic Healthcare Energy Steward",
        definition: "Hospital-focused version ensuring critical efficiency while maintaining patient comfort and regulatory compliance",
        category: "feature",
        context: "Healthcare sector specialization",
        relatedTerms: ["Patient Safety", "Regulatory Compliance", "Medical Facility Management"],
        examples: ["ICU energy optimization", "Patient comfort prioritization", "Compliance reporting"],
        dateAdded: new Date().toLocaleDateString()
      },
      {
        id: 14,
        term: "Altruistic Carbon Credit Creator",
        definition: "System quantifying and documenting CO2 reductions from AI optimizations, enabling automatic carbon credit generation and trading",
        category: "tool",
        context: "Monetization and environmental impact",
        relatedTerms: ["Carbon Trading", "CO2 Quantification", "Revenue Stream"],
        examples: ["Automatic credit generation", "Impact documentation", "Trading platform integration"],
        dateAdded: new Date().toLocaleDateString()
      },
      // Core Technologies
      {
        id: 15,
        term: "Behavioral Pattern Recognition",
        definition: "AI technique for predicting energy inefficiencies by analyzing usage patterns and occupancy behaviors",
        category: "technology",
        context: "Core technical approach of Altruistic AI",
        relatedTerms: ["Predictive Optimization", "HVAC Control", "Occupancy Detection"],
        examples: ["30-day learning period", "Baseline pattern establishment", "Automated decision flagging"],
        dateAdded: new Date().toLocaleDateString()
      },
      {
        id: 16,
        term: "Privacy-First Design",
        definition: "Technical approach ensuring no sensitive data uploads with local processing and optional cloud backup",
        category: "methodology",
        context: "Data security and user trust principle",
        relatedTerms: ["Local Processing", "Cloud Backup", "Data Security"],
        examples: ["On-premises data handling", "Encrypted backup options", "No external data sharing"],
        dateAdded: new Date().toLocaleDateString()
      },
      // Market Strategy
      {
        id: 17,
        term: "Partnership Ecosystem Development",
        definition: "Strategic cultivation of alliances with smart home manufacturers, facility management providers, and carbon credit organizations",
        category: "strategy",
        context: "Market expansion and integration approach",
        relatedTerms: ["Smart Home Manufacturers", "Facility Management", "ESCOs"],
        examples: ["Google Nest integration", "Siemens Desigo partnership", "Carbon market alliances"],
        dateAdded: new Date().toLocaleDateString()
      },
      {
        id: 18,
        term: "Altruistic AI Certification Program",
        definition: "Program certifying institutions as 'Living Laboratories for Responsible Innovation' establishing benchmarks for ethical AI adoption",
        category: "framework",
        context: "Thought leadership and revenue generation",
        relatedTerms: ["Living Laboratories", "Ethical AI Standards", "Thought Leadership"],
        examples: ["University certifications", "Municipal recognition", "Industry benchmarks"],
        dateAdded: new Date().toLocaleDateString()
      },
      // Research Integration
      {
        id: 19,
        term: "ScholarAI Literature Mapping",
        definition: "Academic research integration workflow using citedBy, references, and AI-recommended papers categorized by strategic value",
        category: "methodology",
        context: "Research foundation and academic validation",
        relatedTerms: ["Direct Applications", "Ecosystem Enablers", "Monetization Research"],
        examples: ["10 seed papers", "Citation network analysis", "Strategic categorization"],
        dateAdded: new Date().toLocaleDateString()
      },
      {
        id: 20,
        term: "Truth Seekers",
        definition: "Community validation system where experts audit AI outputs to improve trust scores and system reliability",
        category: "framework",
        context: "Quality assurance and trust building",
        relatedTerms: ["Reality Filter", "Community Validation", "Trust Score"],
        examples: ["Expert review process", "Output verification", "94% trust improvement"],
        dateAdded: new Date().toLocaleDateString()
      }
    ];
    setEntries(initialEntries);
  }, []);

  const categories = ['all', 'concept', 'project', 'feature', 'architecture', 'design', 'methodology', 'tool', 'framework'];

  const categoryColors = {
    concept: 'bg-blue-100 text-blue-800',
    project: 'bg-green-100 text-green-800',
    feature: 'bg-purple-100 text-purple-800',
    architecture: 'bg-orange-100 text-orange-800',
    design: 'bg-pink-100 text-pink-800',
    methodology: 'bg-indigo-100 text-indigo-800',
    tool: 'bg-yellow-100 text-yellow-800',
    framework: 'bg-red-100 text-red-800'
  };

  const categoryIcons = {
    concept: Lightbulb,
    project: BookOpen,
    feature: Zap,
    architecture: Tag,
    design: Tag,
    methodology: Tag,
    tool: Tag,
    framework: Tag
  };

  const filteredEntries = entries.filter(entry => {
    const matchesSearch = entry.term.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         entry.definition.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         entry.context.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || entry.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const handleAddEntry = () => {
    if (newEntry.term && newEntry.definition) {
      const entry = {
        ...newEntry,
        id: entries.length + 1,
        relatedTerms: newEntry.relatedTerms.split(',').map(term => term.trim()).filter(term => term),
        examples: newEntry.examples.split(',').map(example => example.trim()).filter(example => example),
        dateAdded: new Date().toLocaleDateString()
      };
      setEntries([...entries, entry]);
      setNewEntry({
        term: '',
        definition: '',
        category: 'concept',
        context: '',
        relatedTerms: '',
        examples: ''
      });
      setIsAddingEntry(false);
    }
  };

  return (
    <div className="max-w-6xl mx-auto p-6 bg-white min-h-screen">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2 flex items-center gap-2">
          <BookOpen className="text-blue-600" />
          Dynamic Lexicon
        </h1>
        <p className="text-gray-600">Living reference for all concepts, ideas, and terminology we explore together</p>
        <div className="mt-4 flex items-center gap-4 text-sm text-gray-500">
          <span className="flex items-center gap-1">
            <Calendar size={16} />
            {entries.length} entries tracked
          </span>
        </div>
      </div>

      {/* Search and Filter Bar */}
      <div className="mb-6 flex flex-col sm:flex-row gap-4">
        <div className="flex-1 relative">
          <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
          <input
            type="text"
            placeholder="Search terms, definitions, contexts..."
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <div className="flex gap-2">
          <select
            className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
          >
            {categories.map(cat => (
              <option key={cat} value={cat}>
                {cat === 'all' ? 'All Categories' : cat.charAt(0).toUpperCase() + cat.slice(1)}
              </option>
            ))}
          </select>
          <button
            onClick={() => setIsAddingEntry(true)}
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 flex items-center gap-2"
          >
            <Plus size={16} />
            Add Entry
          </button>
        </div>
      </div>

      {/* Add Entry Form */}
      {isAddingEntry && (
        <div className="mb-6 p-6 border border-gray-200 rounded-lg bg-gray-50">
          <h3 className="text-lg font-semibold mb-4">Add New Entry</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Term or concept name"
              className="px-3 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500"
              value={newEntry.term}
              onChange={(e) => setNewEntry({...newEntry, term: e.target.value})}
            />
            <select
              className="px-3 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500"
              value={newEntry.category}
              onChange={(e) => setNewEntry({...newEntry, category: e.target.value})}
            >
              {categories.slice(1).map(cat => (
                <option key={cat} value={cat}>
                  {cat.charAt(0).toUpperCase() + cat.slice(1)}
                </option>
              ))}
            </select>
            <div className="md:col-span-2">
              <textarea
                placeholder="Definition or description"
                className="w-full px-3 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 h-20"
                value={newEntry.definition}
                onChange={(e) => setNewEntry({...newEntry, definition: e.target.value})}
              />
            </div>
            <input
              type="text"
              placeholder="Context or source"
              className="px-3 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500"
              value={newEntry.context}
              onChange={(e) => setNewEntry({...newEntry, context: e.target.value})}
            />
            <input
              type="text"
              placeholder="Related terms (comma-separated)"
              className="px-3 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500"
              value={newEntry.relatedTerms}
              onChange={(e) => setNewEntry({...newEntry, relatedTerms: e.target.value})}
            />
            <div className="md:col-span-2">
              <input
                type="text"
                placeholder="Examples (comma-separated)"
                className="w-full px-3 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500"
                value={newEntry.examples}
                onChange={(e) => setNewEntry({...newEntry, examples: e.target.value})}
              />
            </div>
          </div>
          <div className="mt-4 flex gap-2">
            <button
              onClick={handleAddEntry}
              className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
            >
              Save Entry
            </button>
            <button
              onClick={() => setIsAddingEntry(false)}
              className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600"
            >
              Cancel
            </button>
          </div>
        </div>
      )}

      {/* Entries Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredEntries.map(entry => {
          const IconComponent = categoryIcons[entry.category] || Tag;
          return (
            <div key={entry.id} className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-start justify-between mb-3">
                <h3 className="font-semibold text-gray-900 text-lg">{entry.term}</h3>
                <div className="flex items-center gap-2">
                  <IconComponent size={16} />
                  <span className={`px-2 py-1 rounded text-xs font-medium ${categoryColors[entry.category]}`}>
                    {entry.category}
                  </span>
                </div>
              </div>
              
              <p className="text-gray-700 mb-3 text-sm leading-relaxed">{entry.definition}</p>
              
              {entry.context && (
                <div className="mb-3">
                  <span className="text-xs font-medium text-gray-500">Context:</span>
                  <p className="text-xs text-gray-600 mt-1">{entry.context}</p>
                </div>
              )}
              
              {entry.relatedTerms && entry.relatedTerms.length > 0 && (
                <div className="mb-3">
                  <span className="text-xs font-medium text-gray-500">Related:</span>
                  <div className="flex flex-wrap gap-1 mt-1">
                    {entry.relatedTerms.map((term, index) => (
                      <span key={index} className="px-2 py-1 bg-gray-100 text-gray-600 rounded text-xs">
                        {term}
                      </span>
                    ))}
                  </div>
                </div>
              )}
              
              {entry.examples && entry.examples.length > 0 && (
                <div className="mb-3">
                  <span className="text-xs font-medium text-gray-500">Examples:</span>
                  <ul className="mt-1 text-xs text-gray-600">
                    {entry.examples.slice(0, 2).map((example, index) => (
                      <li key={index} className="truncate">• {example}</li>
                    ))}
                  </ul>
                </div>
              )}
              
              <div className="text-xs text-gray-400 flex items-center gap-1 mt-4 pt-3 border-t border-gray-100">
                <Calendar size={12} />
                Added {entry.dateAdded}
              </div>
            </div>
          );
        })}
      </div>

      {filteredEntries.length === 0 && (
        <div className="text-center py-12">
          <BookOpen className="mx-auto h-12 w-12 text-gray-400" />
          <h3 className="mt-2 text-sm font-medium text-gray-900">No entries found</h3>
          <p className="mt-1 text-sm text-gray-500">
            {searchTerm || selectedCategory !== 'all' 
              ? "Try adjusting your search or filter criteria." 
              : "Start by adding your first concept or idea."}
          </p>
        </div>
      )}
    </div>
  );
};

export default DynamicLexicon;