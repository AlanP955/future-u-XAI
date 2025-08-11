import React, { useState, useEffect } from 'react';
import { 
  Search, Plus, Tag, Calendar, BookOpen, Lightbulb, Zap, 
  Edit3, Trash2, Download, Upload, BarChart3, Globe, Target, 
  Shield, Cpu, Settings, Eye, Save, X
} from 'lucide-react';

const DynamicLexicon = () => {
  const [entries, setEntries] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [isAddingEntry, setIsAddingEntry] = useState(false);
  const [editingEntry, setEditingEntry] = useState(null);
  const [showStats, setShowStats] = useState(false);
  const [sortBy, setSortBy] = useState('dateAdded');
  const [sortOrder, setSortOrder] = useState('desc');
  const [newEntry, setNewEntry] = useState({
    term: '',
    definition: '',
    category: 'concept',
    context: '',
    relatedTerms: '',
    examples: '',
    priority: 'medium',
    status: 'active'
  });

  // Load entries from localStorage on component mount
  useEffect(() => {
    const savedEntries = localStorage.getItem('dynamicLexiconEntries');
    if (savedEntries) {
      setEntries(JSON.parse(savedEntries));
    } else {
      // Initialize with sample entries if no saved data
      initializeSampleEntries();
    }
  }, []);

  // Save entries to localStorage whenever entries change
  useEffect(() => {
    localStorage.setItem('dynamicLexiconEntries', JSON.stringify(entries));
  }, [entries]);

  const initializeSampleEntries = () => {
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
        dateAdded: new Date().toLocaleDateString(),
        priority: "high",
        status: "active"
      },
      {
        id: 2,
        term: "Live Energy Tracker",
        definition: "Interactive dashboard showing solar generation, battery storage vs grid use with scenario toggles",
        category: "feature",
        context: "Page 2 recommended next step",
        relatedTerms: ["Solar Generation", "Battery Storage", "Scenario Toggle"],
        examples: ["Cloudy day vs sunny day scenarios", "Household vs commercial use"],
        dateAdded: new Date().toLocaleDateString(),
        priority: "high",
        status: "active"
      },
      {
        id: 3,
        term: "AI Agent Mesh",
        definition: "Network of specialized AI agents for different sustainability domains",
        category: "architecture",
        context: "Future page development option",
        relatedTerms: ["SolarSaver", "Penny Pincher", "Soil Guardian"],
        examples: ["SolarSaver for energy optimization", "Soil Guardian for agricultural monitoring"],
        dateAdded: new Date().toLocaleDateString(),
        priority: "medium",
        status: "active"
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
        dateAdded: new Date().toLocaleDateString(),
        priority: "high",
        status: "active"
      },
      {
        id: 5,
        term: "Living Laboratory",
        definition: "Institutions transformed into real-world testing environments where AI is visible, understandable, and accountable",
        category: "concept",
        context: "Broader vision for responsible innovation",
        relatedTerms: ["Responsible Innovation", "Ethical AI", "Proof of Concept"],
        examples: ["Universities as AI testing grounds", "Municipal buildings as demonstration sites"],
        dateAdded: new Date().toLocaleDateString(),
        priority: "high",
        status: "active"
      },
      {
        id: 6,
        term: "Reality Filter",
        definition: "Transparent, verifiable AI system that labels outputs as Verified, Speculative, or Unverified with confidence intervals",
        category: "framework",
        context: "Trust-building mechanism for AI transparency",
        relatedTerms: ["Truth Seekers", "AI Transparency", "94% Trust Improvement"],
        examples: ["Campus solar panels generated 2,847 kWh yesterday - Source: Utility meter"],
        dateAdded: new Date().toLocaleDateString(),
        priority: "high",
        status: "active"
      },
      {
        id: 7,
        term: "Minimum Viable Civilization",
        definition: "Building sustainable and resilient civic systems where AI contributes to human well-being and planetary health within 1.18 ha footprint",
        category: "vision",
        context: "Ultimate goal of Altruistic AI ecosystem",
        relatedTerms: ["1.18 ha Target", "Planetary Boundaries", "Sustainable Footprint"],
        examples: ["15 domains tracked", "Food, Mobility, Energy, Goods, Water, Waste optimization"],
        dateAdded: new Date().toLocaleDateString(),
        priority: "high",
        status: "active"
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
        dateAdded: new Date().toLocaleDateString(),
        priority: "high",
        status: "active"
      },
      {
        id: 9,
        term: "Modular Development Prioritization",
        definition: "Building core Proof-of-Concept AI Toolkit as foundational element enabling rapid iteration and vertical customization",
        category: "strategy",
        context: "Development approach for scalability",
        relatedTerms: ["API-First Design", "Vertical Solutions", "Rapid Iteration"],
        examples: ["Home Energy Manager", "Campus Dashboard", "Healthcare Steward"],
        dateAdded: new Date().toLocaleDateString(),
        priority: "medium",
        status: "active"
      },
      {
        id: 10,
        term: "Proof-of-Concept AI Toolkit",
        definition: "Modular software foundation allowing businesses to integrate Altruistic AI's explainable framework into their sustainability solutions",
        category: "tool",
        context: "Core product enabling ecosystem expansion",
        relatedTerms: ["Modular Architecture", "API Integration", "Explainable Framework"],
        examples: ["Building management system integration", "Smart infrastructure deployment"],
        dateAdded: new Date().toLocaleDateString(),
        priority: "high",
        status: "active"
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
        dateAdded: new Date().toLocaleDateString(),
        priority: "medium",
        status: "active"
      },
      {
        id: 12,
        term: "Altruistic Campus Sustainability Dashboard",
        definition: "Specialized platform for universities providing granular energy insights by building, department, or classroom with gamification",
        category: "feature",
        context: "Educational sector application",
        relatedTerms: ["Gamification", "Student Engagement", "AI Training Modules"],
        examples: ["Building-level energy tracking", "Department comparisons", "Student competitions"],
        dateAdded: new Date().toLocaleDateString(),
        priority: "medium",
        status: "active"
      },
      {
        id: 13,
        term: "Altruistic Healthcare Energy Steward",
        definition: "Hospital-focused version ensuring critical efficiency while maintaining patient comfort and regulatory compliance",
        category: "feature",
        context: "Healthcare sector specialization",
        relatedTerms: ["Patient Safety", "Regulatory Compliance", "Medical Facility Management"],
        examples: ["ICU energy optimization", "Patient comfort prioritization", "Compliance reporting"],
        dateAdded: new Date().toLocaleDateString(),
        priority: "medium",
        status: "active"
      },
      {
        id: 14,
        term: "Altruistic Carbon Credit Creator",
        definition: "System quantifying and documenting CO2 reductions from AI optimizations, enabling automatic carbon credit generation and trading",
        category: "tool",
        context: "Monetization and environmental impact",
        relatedTerms: ["Carbon Trading", "CO2 Quantification", "Revenue Stream"],
        examples: ["Automatic credit generation", "Impact documentation", "Trading platform integration"],
        dateAdded: new Date().toLocaleDateString(),
        priority: "medium",
        status: "active"
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
        dateAdded: new Date().toLocaleDateString(),
        priority: "high",
        status: "active"
      },
      {
        id: 16,
        term: "Privacy-First Design",
        definition: "Technical approach ensuring no sensitive data uploads with local processing and optional cloud backup",
        category: "methodology",
        context: "Data security and user trust principle",
        relatedTerms: ["Local Processing", "Cloud Backup", "Data Security"],
        examples: ["On-premises data handling", "Encrypted backup options", "No external data sharing"],
        dateAdded: new Date().toLocaleDateString(),
        priority: "high",
        status: "active"
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
        dateAdded: new Date().toLocaleDateString(),
        priority: "medium",
        status: "active"
      },
      {
        id: 18,
        term: "Altruistic AI Certification Program",
        definition: "Program certifying institutions as 'Living Laboratories for Responsible Innovation' establishing benchmarks for ethical AI adoption",
        category: "framework",
        context: "Thought leadership and revenue generation",
        relatedTerms: ["Living Laboratories", "Ethical AI Standards", "Thought Leadership"],
        examples: ["University certifications", "Municipal recognition", "Industry benchmarks"],
        dateAdded: new Date().toLocaleDateString(),
        priority: "medium",
        status: "active"
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
        dateAdded: new Date().toLocaleDateString(),
        priority: "low",
        status: "active"
      },
      {
        id: 20,
        term: "Truth Seekers",
        definition: "Community validation system where experts audit AI outputs to improve trust scores and system reliability",
        category: "framework",
        context: "Quality assurance and trust building",
        relatedTerms: ["Reality Filter", "Community Validation", "Trust Score"],
        examples: ["Expert review process", "Output verification", "94% trust improvement"],
        dateAdded: new Date().toLocaleDateString(),
        priority: "high",
        status: "active"
      },
      // Future-U.Info Integration
      {
        id: 21,
        term: "Future-U.Info Platform",
        definition: "Strategic knowledge hub and community platform for advancing sustainable AI and responsible innovation practices",
        category: "platform",
        context: "External reference and community integration",
        relatedTerms: ["Knowledge Hub", "Community Platform", "Sustainable AI", "Responsible Innovation"],
        examples: ["future-u.info", "Community discussions", "Resource sharing", "Best practices"],
        dateAdded: new Date().toLocaleDateString(),
        priority: "medium",
        status: "active"
      }
    ];
    setEntries(initialEntries);
  };

  const categories = ['all', 'concept', 'project', 'feature', 'architecture', 'design', 'methodology', 'tool', 'framework', 'vision', 'strategy', 'technology', 'platform'];

  const categoryColors = {
    concept: 'bg-blue-100 text-blue-800',
    project: 'bg-green-100 text-green-800',
    feature: 'bg-purple-100 text-purple-800',
    architecture: 'bg-orange-100 text-orange-800',
    design: 'bg-pink-100 text-pink-800',
    methodology: 'bg-indigo-100 text-indigo-800',
    tool: 'bg-yellow-100 text-yellow-800',
    framework: 'bg-red-100 text-red-800',
    vision: 'bg-emerald-100 text-emerald-800',
    strategy: 'bg-cyan-100 text-cyan-800',
    technology: 'bg-violet-100 text-violet-800',
    platform: 'bg-amber-100 text-amber-800'
  };

  const categoryIcons = {
    concept: Lightbulb,
    project: BookOpen,
    feature: Zap,
    architecture: Cpu,
    design: Eye,
    methodology: Settings,
    tool: Tag,
    framework: Shield,
    vision: Target,
    strategy: BarChart3,
    technology: Cpu,
    platform: Globe
  };

  const priorityColors = {
    high: 'bg-red-100 text-red-800',
    medium: 'bg-yellow-100 text-yellow-800',
    low: 'bg-gray-100 text-gray-800'
  };

  const filteredEntries = entries.filter(entry => {
    const matchesSearch = entry.term.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         entry.definition.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         entry.context.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         entry.relatedTerms.some(term => term.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesCategory = selectedCategory === 'all' || entry.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const sortedEntries = [...filteredEntries].sort((a, b) => {
    let aValue, bValue;
    
    switch (sortBy) {
      case 'term':
        aValue = a.term.toLowerCase();
        bValue = b.term.toLowerCase();
        break;
      case 'category':
        aValue = a.category.toLowerCase();
        bValue = b.category.toLowerCase();
        break;
      case 'priority':
        const priorityOrder = { high: 3, medium: 2, low: 1 };
        aValue = priorityOrder[a.priority];
        bValue = priorityOrder[b.priority];
        break;
      case 'dateAdded':
      default:
        aValue = new Date(a.dateAdded);
        bValue = new Date(b.dateAdded);
        break;
    }
    
    if (sortOrder === 'asc') {
      return aValue > bValue ? 1 : -1;
    } else {
      return aValue < bValue ? 1 : -1;
    }
  });

  const handleAddEntry = () => {
    if (newEntry.term && newEntry.definition) {
      const entry = {
        ...newEntry,
        id: Date.now(),
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
        examples: '',
        priority: 'medium',
        status: 'active'
      });
      setIsAddingEntry(false);
    }
  };

  const handleEditEntry = (entry) => {
    setEditingEntry(entry);
    setNewEntry({
      term: entry.term,
      definition: entry.definition,
      category: entry.category,
      context: entry.context,
      relatedTerms: entry.relatedTerms.join(', '),
      examples: entry.examples.join(', '),
      priority: entry.priority,
      status: entry.status
    });
    setIsAddingEntry(true);
  };

  const handleUpdateEntry = () => {
    if (newEntry.term && newEntry.definition && editingEntry) {
      const updatedEntry = {
        ...editingEntry,
        ...newEntry,
        relatedTerms: newEntry.relatedTerms.split(',').map(term => term.trim()).filter(term => term),
        examples: newEntry.examples.split(',').map(example => example.trim()).filter(example => example),
        lastModified: new Date().toLocaleDateString()
      };
      
      setEntries(entries.map(entry => 
        entry.id === editingEntry.id ? updatedEntry : entry
      ));
      
      setNewEntry({
        term: '',
        definition: '',
        category: 'concept',
        context: '',
        relatedTerms: '',
        examples: '',
        priority: 'medium',
        status: 'active'
      });
      setEditingEntry(null);
      setIsAddingEntry(false);
    }
  };

  const handleDeleteEntry = (entryId) => {
    if (window.confirm('Are you sure you want to delete this entry?')) {
      setEntries(entries.filter(entry => entry.id !== entryId));
    }
  };

  const handleExport = () => {
    const dataStr = JSON.stringify(entries, null, 2);
    const dataUri = 'data:application/json;charset=utf-8,'+ encodeURIComponent(dataStr);
    const exportFileDefaultName = `dynamic-lexicon-${new Date().toISOString().split('T')[0]}.json`;
    
    const linkElement = document.createElement('a');
    linkElement.setAttribute('href', dataUri);
    linkElement.setAttribute('download', exportFileDefaultName);
    linkElement.click();
  };

  const handleImport = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        try {
          const importedEntries = JSON.parse(e.target.result);
          setEntries(importedEntries);
          alert(`Successfully imported ${importedEntries.length} entries`);
        } catch (error) {
          alert('Error importing file. Please check the file format.');
        }
      };
      reader.readAsText(file);
    }
  };

  const getStats = () => {
    const stats = {
      total: entries.length,
      byCategory: {},
      byPriority: {},
      byStatus: {}
    };

    entries.forEach(entry => {
      stats.byCategory[entry.category] = (stats.byCategory[entry.category] || 0) + 1;
      stats.byPriority[entry.priority] = (stats.byPriority[entry.priority] || 0) + 1;
      stats.byStatus[entry.status] = (stats.byStatus[entry.status] || 0) + 1;
    });

    return stats;
  };

  const highlightText = (text, searchTerm) => {
    if (!searchTerm) return text;
    const regex = new RegExp(`(${searchTerm})`, 'gi');
    return text.replace(regex, '<mark class="bg-yellow-200">$1</mark>');
  };

  const stats = getStats();

  return (
    <div className="max-w-7xl mx-auto p-6 bg-white min-h-screen">
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h1 className="text-4xl font-bold text-gray-900 mb-2 flex items-center gap-3">
              <BookOpen className="text-blue-600" />
              Dynamic Lexicon
            </h1>
            <p className="text-gray-600 text-lg">Living reference for all concepts, ideas, and terminology we explore together</p>
            <div className="mt-4 flex items-center gap-6 text-sm text-gray-500">
              <span className="flex items-center gap-2">
                <Calendar size={16} />
                {entries.length} entries tracked
              </span>
              <span className="flex items-center gap-2">
                <Globe size={16} />
                <a 
                  href="https://future-u.info" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800 underline"
                >
                  future-u.info
                </a>
              </span>
            </div>
          </div>
          <div className="flex gap-2">
            <button
              onClick={() => setShowStats(!showStats)}
              className="px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 flex items-center gap-2"
            >
              <BarChart3 size={16} />
              Stats
            </button>
            <button
              onClick={handleExport}
              className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 flex items-center gap-2"
            >
              <Download size={16} />
              Export
            </button>
            <label className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 flex items-center gap-2 cursor-pointer">
              <Upload size={16} />
              Import
              <input
                type="file"
                accept=".json"
                onChange={handleImport}
                className="hidden"
              />
            </label>
          </div>
        </div>
      </div>

      {/* Statistics Dashboard */}
      {showStats && (
        <div className="mb-6 p-6 border border-gray-200 rounded-lg bg-gray-50">
          <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
            <BarChart3 className="text-blue-600" />
            Lexicon Statistics
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="text-center p-4 bg-white rounded-lg border">
              <div className="text-2xl font-bold text-blue-600">{stats.total}</div>
              <div className="text-sm text-gray-600">Total Entries</div>
            </div>
            <div className="text-center p-4 bg-white rounded-lg border">
              <div className="text-2xl font-bold text-green-600">{Object.keys(stats.byCategory).length}</div>
              <div className="text-sm text-gray-600">Categories</div>
            </div>
            <div className="text-center p-4 bg-white rounded-lg border">
              <div className="text-2xl font-bold text-purple-600">{stats.byPriority.high || 0}</div>
              <div className="text-sm text-gray-600">High Priority</div>
            </div>
            <div className="text-center p-4 bg-white rounded-lg border">
              <div className="text-2xl font-bold text-orange-600">{stats.byStatus.active || 0}</div>
              <div className="text-sm text-gray-600">Active</div>
            </div>
          </div>
          <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <h4 className="font-medium mb-2">By Category</h4>
              {Object.entries(stats.byCategory).map(([category, count]) => (
                <div key={category} className="flex justify-between text-sm">
                  <span className="capitalize">{category}</span>
                  <span className="font-medium">{count}</span>
                </div>
              ))}
            </div>
            <div>
              <h4 className="font-medium mb-2">By Priority</h4>
              {Object.entries(stats.byPriority).map(([priority, count]) => (
                <div key={priority} className="flex justify-between text-sm">
                  <span className="capitalize">{priority}</span>
                  <span className="font-medium">{count}</span>
                </div>
              ))}
            </div>
            <div>
              <h4 className="font-medium mb-2">By Status</h4>
              {Object.entries(stats.byStatus).map(([status, count]) => (
                <div key={status} className="flex justify-between text-sm">
                  <span className="capitalize">{status}</span>
                  <span className="font-medium">{count}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Search and Filter Bar */}
      <div className="mb-6 flex flex-col lg:flex-row gap-4">
        <div className="flex-1 relative">
          <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
          <input
            type="text"
            placeholder="Search terms, definitions, contexts, related terms..."
            className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-lg"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <div className="flex flex-wrap gap-2">
          <select
            className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
          >
            {categories.map(cat => (
              <option key={cat} value={cat}>
                {cat === 'all' ? 'All Categories' : cat.charAt(0).toUpperCase() + cat.slice(1)}
              </option>
            ))}
          </select>
          <select
            className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
          >
            <option value="dateAdded">Sort by Date</option>
            <option value="term">Sort by Term</option>
            <option value="category">Sort by Category</option>
            <option value="priority">Sort by Priority</option>
          </select>
          <button
            onClick={() => setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc')}
            className="px-4 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 flex items-center gap-2"
          >
            {sortOrder === 'asc' ? '↑' : '↓'}
          </button>
          <button
            onClick={() => setIsAddingEntry(true)}
            className="px-4 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 flex items-center gap-2"
          >
            <Plus size={16} />
            Add Entry
          </button>
        </div>
      </div>

      {/* Add/Edit Entry Form */}
      {isAddingEntry && (
        <div className="mb-6 p-6 border border-gray-200 rounded-lg bg-gray-50">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold">
              {editingEntry ? 'Edit Entry' : 'Add New Entry'}
            </h3>
            <button
              onClick={() => {
                setIsAddingEntry(false);
                setEditingEntry(null);
                setNewEntry({
                  term: '',
                  definition: '',
                  category: 'concept',
                  context: '',
                  relatedTerms: '',
                  examples: '',
                  priority: 'medium',
                  status: 'active'
                });
              }}
              className="text-gray-500 hover:text-gray-700"
            >
              <X size={20} />
            </button>
          </div>
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
            <select
              className="px-3 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500"
              value={newEntry.priority}
              onChange={(e) => setNewEntry({...newEntry, priority: e.target.value})}
            >
              <option value="low">Low Priority</option>
              <option value="medium">Medium Priority</option>
              <option value="high">High Priority</option>
            </select>
            <select
              className="px-3 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500"
              value={newEntry.status}
              onChange={(e) => setNewEntry({...newEntry, status: e.target.value})}
            >
              <option value="active">Active</option>
              <option value="draft">Draft</option>
              <option value="archived">Archived</option>
            </select>
            <div className="md:col-span-2">
              <textarea
                placeholder="Definition or description"
                className="w-full px-3 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 h-24"
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
            {editingEntry ? (
              <button
                onClick={handleUpdateEntry}
                className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 flex items-center gap-2"
              >
                <Save size={16} />
                Update Entry
              </button>
            ) : (
              <button
                onClick={handleAddEntry}
                className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 flex items-center gap-2"
              >
                <Plus size={16} />
                Save Entry
              </button>
            )}
            <button
              onClick={() => {
                setIsAddingEntry(false);
                setEditingEntry(null);
                setNewEntry({
                  term: '',
                  definition: '',
                  category: 'concept',
                  context: '',
                  relatedTerms: '',
                  examples: '',
                  priority: 'medium',
                  status: 'active'
                });
              }}
              className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600"
            >
              Cancel
            </button>
          </div>
        </div>
      )}

      {/* Entries Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {sortedEntries.map(entry => {
          const IconComponent = categoryIcons[entry.category] || Tag;
          return (
            <div key={entry.id} className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-all duration-200 bg-white">
              <div className="flex items-start justify-between mb-3">
                <h3 
                  className="font-semibold text-gray-900 text-lg flex-1 mr-2"
                  dangerouslySetInnerHTML={{ 
                    __html: highlightText(entry.term, searchTerm) 
                  }}
                />
                <div className="flex items-center gap-2 flex-shrink-0">
                  <IconComponent size={16} className="text-gray-600" />
                  <span className={`px-2 py-1 rounded text-xs font-medium ${categoryColors[entry.category]}`}>
                    {entry.category}
                  </span>
                </div>
              </div>
              
              <div className="flex items-center gap-2 mb-3">
                <span className={`px-2 py-1 rounded text-xs font-medium ${priorityColors[entry.priority]}`}>
                  {entry.priority}
                </span>
                <span className={`px-2 py-1 rounded text-xs font-medium ${
                  entry.status === 'active' ? 'bg-green-100 text-green-800' :
                  entry.status === 'draft' ? 'bg-yellow-100 text-yellow-800' :
                  'bg-gray-100 text-gray-800'
                }`}>
                  {entry.status}
                </span>
              </div>
              
              <p 
                className="text-gray-700 mb-3 text-sm leading-relaxed"
                dangerouslySetInnerHTML={{ 
                  __html: highlightText(entry.definition, searchTerm) 
                }}
              />
              
              {entry.context && (
                <div className="mb-3">
                  <span className="text-xs font-medium text-gray-500">Context:</span>
                  <p 
                    className="text-xs text-gray-600 mt-1"
                    dangerouslySetInnerHTML={{ 
                      __html: highlightText(entry.context, searchTerm) 
                    }}
                  />
                </div>
              )}
              
              {entry.relatedTerms && entry.relatedTerms.length > 0 && (
                <div className="mb-3">
                  <span className="text-xs font-medium text-gray-500">Related:</span>
                  <div className="flex flex-wrap gap-1 mt-1">
                    {entry.relatedTerms.map((term, index) => (
                      <span 
                        key={index} 
                        className="px-2 py-1 bg-gray-100 text-gray-600 rounded text-xs cursor-pointer hover:bg-gray-200"
                        onClick={() => setSearchTerm(term)}
                      >
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
              
              <div className="flex items-center justify-between mt-4 pt-3 border-t border-gray-100">
                <div className="text-xs text-gray-400 flex items-center gap-1">
                  <Calendar size={12} />
                  Added {entry.dateAdded}
                  {entry.lastModified && (
                    <span className="ml-2">• Modified {entry.lastModified}</span>
                  )}
                </div>
                <div className="flex items-center gap-1">
                  <button
                    onClick={() => handleEditEntry(entry)}
                    className="p-1 text-gray-400 hover:text-blue-600 transition-colors"
                    title="Edit entry"
                  >
                    <Edit3 size={14} />
                  </button>
                  <button
                    onClick={() => handleDeleteEntry(entry.id)}
                    className="p-1 text-gray-400 hover:text-red-600 transition-colors"
                    title="Delete entry"
                  >
                    <Trash2 size={14} />
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {sortedEntries.length === 0 && (
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

      {/* Footer */}
      <div className="mt-12 pt-8 border-t border-gray-200 text-center text-sm text-gray-500">
        <p>Dynamic Lexicon - Powered by Altruistic AI • 
          <a 
            href="https://future-u.info" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-800 underline ml-1"
          >
            future-u.info
          </a>
        </p>
      </div>
    </div>
  );
};

export default DynamicLexicon;


https://vscode.dev/github/Inga-Kal4/future-u-XAI/blob/mainon.jsx#L1-L962
