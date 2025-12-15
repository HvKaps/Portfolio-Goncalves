import React, { useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import { X, Download, ChevronLeft, ChevronRight, Loader2 } from 'lucide-react';

// Configuration indispensable du worker
pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;
import 'react-pdf/dist/Page/AnnotationLayer.css';
import 'react-pdf/dist/Page/TextLayer.css';

const CvViewer = ({ isOpen, onClose, darkMode }) => {
    const [numPages, setNumPages] = useState(null);
    const [pageNumber, setPageNumber] = useState(1);

    const pdfUrl = "/Folder/GONCALVES CV DEVELOPPEUR WEB.pdf";

    if (!isOpen) return null;

    function onDocumentLoadSuccess({ numPages }) {
        setNumPages(numPages);
    }

    return (
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
            
            <div 
                className="absolute inset-0 bg-black/60 backdrop-blur-sm" 
                onClick={onClose}
            />

            
            <div className={`relative w-full max-w-4xl h-[90vh] rounded-2xl shadow-2xl flex flex-col overflow-hidden border ${
                darkMode ? "bg-zinc-900 border-white/10" : "bg-white border-black/10"
            }`}>
                
                
                <div className={`flex justify-between items-center p-4 border-b ${
                    darkMode ? "border-white/10" : "border-black/10"
                }`}>
                    <h3 className="font-bold text-lg">Mon Curriculum Vitae</h3>
                    <div className="flex gap-2">
                        <a 
                            href={pdfUrl} 
                            download 
                            className={`p-2 rounded-full transition-colors ${
                                darkMode ? "hover:bg-white/10" : "hover:bg-black/10"
                            }`}
                            title="Télécharger"
                        >
                            <Download size={20} />
                        </a>
                        <button 
                            onClick={onClose}
                            className={`p-2 rounded-full transition-colors ${
                                darkMode ? "hover:bg-white/10" : "hover:bg-black/10"
                            }`}
                        >
                            <X size={20} />
                        </button>
                    </div>
                </div>

                
                <div className="flex-1 overflow-auto flex justify-center bg-gray-500/10 p-4">
                    <Document
                        file={pdfUrl}
                        onLoadSuccess={onDocumentLoadSuccess}
                        loading={
                            <div className="flex items-center gap-2 mt-10">
                                <Loader2 className="animate-spin" /> Chargement du CV...
                            </div>
                        }
                        error={
                            <div className="text-red-500 mt-10">
                                Erreur lors du chargement du PDF. Vérifiez le chemin du fichier.
                            </div>
                        }
                    >
                        <Page 
                            pageNumber={pageNumber} 
                            renderTextLayer={false} 
                            renderAnnotationLayer={false}
                            scale={window.innerWidth < 768 ? 0.6 : 1.0} 
                            className="shadow-lg"
                        />
                    </Document>
                </div>
            </div>
        </div>
    );
};

export default CvViewer;