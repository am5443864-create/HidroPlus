import React, { useEffect } from 'react';
import './ProductModal.css';

const ProductModal = ({ product, onClose }) => {
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>

        <div className="modal-grid">
          <div className="modal-image">
            {product.imageUrl ? (
              <img src={product.imageUrl} alt={product.name} className="modal-photo" />
            ) : (
              <div className="modal-icon">{product.image}</div>
            )}
          </div>

          <div className="modal-info">
            <span className="modal-category">{product.category}</span>
            <h2 className="modal-title">{product.name}</h2>
            <p className="modal-description">{product.details}</p>

            <div className="modal-specs">
              <h3>Especificaciones</h3>
              <ul>
                {product.specs.map((spec, index) => (
                  <li key={index}>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <span>{spec}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="modal-actions">
              <button className="btn btn-primary">
                Solicitar Cotización
              </button>
              <button className="btn btn-secondary" onClick={onClose}>
                Ver más productos
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductModal;
