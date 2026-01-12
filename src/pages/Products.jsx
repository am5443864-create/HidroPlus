import React, { useState } from 'react';
import ProductModal from '../components/ProductModal';
import './Products.css';

const Products = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);

  const products = [
    {
      id: 1,
      name: 'Tubería PVC',
      category: 'Hidráulica',
      description: 'Tubería de PVC de alta resistencia para sistemas hidráulicos',
      image: '🔧',
      imageUrl: '/AGUA-POTABLE.jpg',
      details: 'Tubería de PVC de primera calidad, disponible en diferentes diámetros. Ideal para instalaciones hidráulicas residenciales, comerciales e industriales. Cumple con todas las normas mexicanas de calidad.',
      specs: ['Diámetros: 1/2" a 4"', 'Presión: 150-250 PSI', 'Certificación NOM'],
    },
    {
      id: 2,
      name: 'Válvulas de Control',
      category: 'Hidráulica',
      description: 'Válvulas de alta precisión para control de flujo',
      image: '⚙️',
      imageUrl: '/images (4).jpg',
      details: 'Válvulas de control de flujo fabricadas con materiales de primera calidad. Diseñadas para ofrecer un control preciso y duradero en sistemas hidráulicos.',
      specs: ['Material: Bronce y acero inoxidable', 'Tamaños: 1/2" a 3"', 'Garantía: 5 años'],
    },
    {
      id: 3,
      name: 'Sistemas de Riego',
      category: 'Riego',
      description: 'Sistemas completos de riego por aspersión y goteo',
      image: '💧',
      imageUrl: '/SISTEMA-DE-RIEGO.jpg',
      details: 'Sistemas de riego automatizados para áreas verdes, jardines y campos deportivos. Incluye aspersores, controladores y sensores de humedad.',
      specs: ['Cobertura: hasta 500m²', 'Programable', 'Ahorro de agua del 40%'],
    },
    {
      id: 4,
      name: 'Bombas de Agua',
      category: 'Hidráulica',
      description: 'Bombas centrífugas y sumergibles de alto rendimiento',
      image: '⚡',
      imageUrl: '/SISTEMA_POZOS.jpg',
      details: 'Bombas de agua de alta eficiencia para uso residencial, comercial e industrial. Diseñadas para ofrecer máximo rendimiento con bajo consumo energético.',
      specs: ['Potencia: 0.5 HP a 5 HP', 'Caudal: hasta 200 L/min', 'Eficiencia energética A+'],
    },
    {
      id: 5,
      name: 'Registros de Alcantarillado',
      category: 'Alcantarillado',
      description: 'Registros y tapas para sistemas de alcantarillado',
      image: '🏗️',
      imageUrl: '/ALCANTARILLADO.jpg',
      details: 'Registros de alcantarillado fabricados en concreto y polímero de alta resistencia. Diseñados para soportar cargas vehiculares pesadas.',
      specs: ['Carga: hasta 40 toneladas', 'Diámetros: 60cm a 120cm', 'Antideslizante'],
    },
    {
      id: 6,
      name: 'Tuberías de Alcantarillado',
      category: 'Alcantarillado',
      description: 'Tubería para drenaje y alcantarillado sanitario',
      image: '🚰',
      imageUrl: '/ALCANTARILLADO.jpg',
      details: 'Tubería de alcantarillado de PVC y concreto para sistemas de drenaje sanitario y pluvial. Alta resistencia a la corrosión y larga vida útil.',
      specs: ['Diámetros: 4" a 24"', 'Serie 20 y 25', 'Resistente a químicos'],
    },
    {
      id: 7,
      name: 'Accesorios Hidráulicos',
      category: 'Hidráulica',
      description: 'Codos, tees, reducciones y más',
      image: '🔩',
      details: 'Amplia gama de accesorios hidráulicos en PVC, CPVC y cobre. Perfectos para completar cualquier instalación hidráulica con los más altos estándares de calidad.',
      specs: ['Material: PVC, CPVC, Cobre', 'Todos los diámetros', 'Certificados'],
    },
    {
      id: 8,
      name: 'Aspersores Profesionales',
      category: 'Riego',
      description: 'Aspersores de alta calidad para riego profesional',
      image: '🌱',
      details: 'Aspersores profesionales con cabezales ajustables y alcance regulable. Ideales para campos deportivos, parques y áreas verdes de gran extensión.',
      specs: ['Alcance: hasta 25 metros', 'Rotación: 0° a 360°', 'Anti-vandalismo'],
    },
  ];

  const categories = ['Todos', ...new Set(products.map(p => p.category))];
  const [selectedCategory, setSelectedCategory] = useState('Todos');

  const filteredProducts = selectedCategory === 'Todos' 
    ? products 
    : products.filter(p => p.category === selectedCategory);

  return (
    <div className="products-page">
      <div className="products-hero">
        <div className="container">
          <h1 className="page-title">Nuestros Productos</h1>
          <p className="page-subtitle">
            Soluciones completas en sistemas hidráulicos, alcantarillado y riego
          </p>
        </div>
      </div>

      <div className="container">
        <div className="products-filter">
          {categories.map((category) => (
            <button
              key={category}
              className={`filter-btn ${selectedCategory === category ? 'active' : ''}`}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="products-grid">
          {filteredProducts.map((product) => (
            <div 
              key={product.id} 
              className="product-card"
              onClick={() => setSelectedProduct(product)}
            >
              <div className="product-image">
                {product.imageUrl ? (
                  <img src={product.imageUrl} alt={product.name} className="product-photo" />
                ) : (
                  <div className="product-icon">{product.image}</div>
                )}
                <div className="product-overlay">
                  <span>Ver detalles</span>
                </div>
              </div>
              <div className="product-info">
                <span className="product-category">{product.category}</span>
                <h3 className="product-name">{product.name}</h3>
                <p className="product-description">{product.description}</p>
                <button className="product-btn">
                  Más información
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedProduct && (
        <ProductModal 
          product={selectedProduct} 
          onClose={() => setSelectedProduct(null)} 
        />
      )}
    </div>
  );
};

export default Products;
