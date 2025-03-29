
import { Card, CardContent } from "@/components/ui/card";
import { Dna, Sparkles, FlaskConical, Microscope, FileText } from 'lucide-react';
import { Link } from 'react-router-dom';

const categories = [
  {
    id: 'dna',
    name: 'DNA Patents',
    icon: Dna,
    description: 'Gene sequences, genetic modifications, and DNA-related IP',
    color: 'from-dna-blue to-cyber-blue',
    bgColor: 'bg-dna-blue/10',
    borderColor: 'border-dna-blue/30'
  },
  {
    id: 'molecule',
    name: 'Molecules',
    icon: Sparkles,
    description: 'Novel compounds, drug formulations, and chemical structures',
    color: 'from-dna-green to-cyber-green',
    bgColor: 'bg-dna-green/10',
    borderColor: 'border-dna-green/30'
  },
  {
    id: 'protein',
    name: 'Proteins',
    icon: FlaskConical,
    description: 'Antibodies, enzymes, and protein-related IP assets',
    color: 'from-dna-red to-cyber-pink',
    bgColor: 'bg-dna-red/10',
    borderColor: 'border-dna-red/30'
  },
  {
    id: 'cell',
    name: 'Cell Lines',
    icon: Microscope,
    description: 'Cell cultures, cell therapies, and cellular technology',
    color: 'from-dna-yellow to-cyber-purple',
    bgColor: 'bg-dna-yellow/10',
    borderColor: 'border-dna-yellow/30'
  },
  {
    id: 'research',
    name: 'Research Methods',
    icon: FileText,
    description: 'Proprietary techniques, protocols, and research methodologies',
    color: 'from-cyber-purple to-cyber-blue',
    bgColor: 'bg-cyber-purple/10',
    borderColor: 'border-cyber-purple/30'
  }
];

const Categories = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold neon-text mb-3">Browse Categories</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Explore our diverse collection of biotech and pharma intellectual property assets
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {categories.map((category) => (
            <Link to={`/category/${category.id}`} key={category.id}>
              <Card className={`cyber-card h-full transition-all duration-300 group ${category.bgColor} border-opacity-30 ${category.borderColor} hover:border-opacity-70`}>
                <CardContent className="p-6 flex flex-col items-center text-center h-full">
                  <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-4 bg-gradient-to-br ${category.color} bg-opacity-20 p-0.5 group-hover:animate-pulse-neon`}>
                    <div className="w-full h-full rounded-2xl bg-cyber-dark/70 flex items-center justify-center backdrop-blur-sm">
                      <category.icon className="h-8 w-8 text-white" />
                    </div>
                  </div>
                  
                  <h3 className="font-bold text-lg mb-2 text-white">{category.name}</h3>
                  <p className="text-gray-400 text-sm">{category.description}</p>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;
