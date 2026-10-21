import { DocumentPage, HandwritingPersona, InkColor } from '../types';

export const PERSONAS: HandwritingPersona[] = [
  {
    id: 'aarav',
    name: 'Aarav Patel',
    initials: 'Aa',
    description: 'Cursive Engineering Slant · Rapid Pen',
    fontClass: 'font-persona-aarav',
    badge: 'Recommended',
    tag: 'Rapid Pen'
  },
  {
    id: 'elena',
    name: 'Elena Vance',
    initials: 'El',
    description: 'Neat Academic Print · Precise Spacing',
    fontClass: 'font-persona-elena',
    clarity: '98% Clarity'
  },
  {
    id: 'marcus',
    name: 'Marcus Chen',
    initials: 'MC',
    description: 'Architect Quick Jots · Bold Capitals',
    fontClass: 'font-persona-marcus',
    clarity: 'Modern'
  },
  {
    id: 'devi',
    name: 'Devi Nair',
    initials: 'Dv',
    description: 'Flowing Fountain Script · Soft Flourish',
    fontClass: 'font-persona-devi',
    clarity: 'Organic'
  },
  {
    id: 'custom',
    name: '+ Clone Your Own Hand',
    initials: 'AI',
    description: 'Upload 1 page sample · Free AI model',
    fontClass: 'font-persona-custom',
    badge: 'NEW',
    tag: 'Custom Neural Model'
  }
];

export const INK_COLORS: InkColor[] = [
  {
    id: 'oxford',
    name: 'Royal Oxford Blue',
    hex: '#1d4ed8',
    bgTailwind: 'bg-blue-700',
    nib: '0.5mm Nib'
  },
  {
    id: 'black',
    name: 'Deep Velvet Black',
    hex: '#0f172a',
    bgTailwind: 'bg-slate-900',
    nib: '0.38mm Fine'
  },
  {
    id: 'gel-blue',
    name: 'Gel Pilot Blue',
    hex: '#2563eb',
    bgTailwind: 'bg-blue-500',
    nib: '0.7mm Ball'
  },
  {
    id: 'crimson',
    name: 'Grading Crimson Red',
    hex: '#dc2626',
    bgTailwind: 'bg-red-600',
    nib: '0.5mm Chisel'
  },
  {
    id: 'emerald',
    name: 'Emerald Field Green',
    hex: '#059669',
    bgTailwind: 'bg-emerald-600',
    nib: '0.4mm Micron'
  }
];

export const INITIAL_PAGES: DocumentPage[] = [
  {
    id: 1,
    rollNumber: 'Roll #4029 // Aarav P.',
    course: 'CS401 Machine Learning',
    date: 'Oct 24, 2025',
    sheetLabel: 'Sheet 01',
    chapterTitle: 'Chapter 4: Gradient Descent & Loss Landscapes',
    chapterSubtitle: 'Autonomous convergence in high-dimensional non-convex parameter spaces.',
    introText: 'Given an objective function J(θ) parameterized by weights θ ∈ ℜᵈ, the fundamental first-order optimization seeks updates along the negative gradient vector:',
    formula: {
      math: 'θ_{t+1} = θ_{t} - η · ∇_{θ} J(θ_{t}; x^{(i)}, y^{(i)})',
      caption: 'Eq 4.1 · Momentum adjusted'
    },
    bulletPoints: [
      {
        title: 'Stochastic Batch Drift:',
        description: 'Mini-batch estimators approximate expectation while avoiding memory saturation on GPU tensors.',
        tilt: -0.3
      },
      {
        title: 'Saddle Point Escapes:',
        description: 'Hessian eigenvalues reveal directions of negative curvature where standard SGD slows asymptotically.',
        tilt: 0.4
      },
      {
        title: 'Adaptive Learning Rates:',
        description: 'Adam and RMSprop scale individual coordinate step-lengths using second moment running averages.',
        tilt: -0.5
      }
    ],
    diagram: {
      title: 'Figure 4.2: Hand-Synthesized Vector Graph',
      type: 'gradient-descent',
      simulatedPressure: '0.62 bar',
      svgNodes: 284
    },
    instructorNote: 'Instructor Note: Ensure proof for Theorem 4.3 includes the Lipschitz continuity bound before Friday submission!'
  },
  {
    id: 2,
    rollNumber: 'Roll #4029 // Aarav P.',
    course: 'CS401 Machine Learning',
    date: 'Oct 24, 2025',
    sheetLabel: 'Sheet 02',
    chapterTitle: 'Chapter 4.2: Computational Graphs & Reverse-Mode AutoDiff',
    chapterSubtitle: 'Systematic algorithmic evaluation of analytical derivatives across dense DAGs.',
    introText: 'By representing nested matrix operations as directed acyclic graphs, the multivariate chain rule propagates upstream sensitivities backward across intermediate tensors:',
    formula: {
      math: '∂L/∂w_{ij} = (∂L/∂y) · (∂y/∂z) · (∂z/∂w_{ij}) = δ_{j} · a_{i}',
      caption: 'Eq 4.2 · Tensor Chain Rule Propagation'
    },
    bulletPoints: [
      {
        title: 'Forward Topological Sweep:',
        description: 'Intermediate node activations are cached during forward inference to preserve gradient dependencies.',
        tilt: 0.2
      },
      {
        title: 'Memory Checkpointing:',
        description: 'Recomputes transient activation matrices dynamically rather than exhausting GPU High-Bandwidth Memory.',
        tilt: -0.4
      },
      {
        title: 'Jacobian-Vector Products:',
        description: 'Reverse-mode bypasses explicit dense N×M matrix formulation in favor of adjoint projections.',
        tilt: 0.3
      }
    ],
    diagram: {
      title: 'Figure 4.3: Node Dependency Chain & Backprop Vector',
      type: 'neural-graph',
      simulatedPressure: '0.58 bar',
      svgNodes: 312
    },
    instructorNote: 'Important: Double check if memory checkpointing applies to the attention layers in Chapter 5!'
  },
  {
    id: 3,
    rollNumber: 'Roll #4029 // Aarav P.',
    course: 'CS401 Machine Learning',
    date: 'Oct 25, 2025',
    sheetLabel: 'Sheet 03',
    chapterTitle: 'Chapter 4.3: Generalization, Ridge vs Lasso Contours',
    chapterSubtitle: 'Norm-penalized regularization geometries and structural parameter sparsity.',
    introText: 'Overfitting occurs when high-capacity hypotheses fit stochastic noise. Constrained empirical risk minimization introduces geometric prior penalization:',
    formula: {
      math: 'min_{w} 1/2n ||Xw - y||₂² + λ (α ||w||₁ + (1-α)/2 ||w||₂²)',
      caption: 'Eq 4.3 · Elastic Net Regularized Risk'
    },
    bulletPoints: [
      {
        title: 'L1 Diamond Vertices:',
        description: 'The polyhedral corners of the Manhattan sphere align preferentially with coordinate axes, yielding exact sparse zeros.',
        tilt: -0.3
      },
      {
        title: 'L2 Isotropic Shrinkage:',
        description: 'Spherical Euclidean contours shrink coefficients proportionally without enforcing structural sparsity.',
        tilt: 0.5
      },
      {
        title: 'Spectral Radius Bound:',
        description: 'Weight decay effectively penalizes high singular values in recurrent transitions, dampening exploding gradients.',
        tilt: -0.2
      }
    ],
    diagram: {
      title: 'Figure 4.4: L1 Diamond vs L2 Circular Contour Tangents',
      type: 'regularization-contour',
      simulatedPressure: '0.65 bar',
      svgNodes: 298
    },
    instructorNote: 'Self Note: Derive the subgradient condition for L1 at w=0 for the tutorial presentation.'
  },
  {
    id: 4,
    rollNumber: 'Roll #4029 // Aarav P.',
    course: 'CS401 Machine Learning',
    date: 'Oct 25, 2025',
    sheetLabel: 'Sheet 04',
    chapterTitle: 'Chapter 4.4: Scaled Dot-Product Self-Attention',
    chapterSubtitle: 'Quadratic pair-wise query-key associations in sequence transformation.',
    introText: 'Self-attention maps queries Q and key-value pairs K, V to an output vector calculated as a weighted softmax combination over representation tokens:',
    formula: {
      math: 'Attention(Q, K, V) = softmax( (Q · Kᵀ) / √d_{k} ) · V',
      caption: 'Eq 4.4 · Vaswani et al. Scaled Dot-Product'
    },
    bulletPoints: [
      {
        title: 'Scale Factor √dₖ:',
        description: 'Prevents large dot-product magnitudes from pushing softmax logits into asymptotic vanishing gradient saturation.',
        tilt: 0.3
      },
      {
        title: 'Multi-Head Projections:',
        description: 'Permits model representation subspace splitting across diverse positional and syntactic relational patterns.',
        tilt: -0.4
      },
      {
        title: 'Permutation Equivariance:',
        description: 'Requires additive or rotary positional encodings (RoPE) to reintroduce relative token token ordering.',
        tilt: 0.2
      }
    ],
    diagram: {
      title: 'Figure 4.5: Attention Matrix Query-Key Affinity Heatmap',
      type: 'attention-matrix',
      simulatedPressure: '0.60 bar',
      svgNodes: 340
    },
    instructorNote: 'Verified complete assignment: Chapters 4.1 to 4.4 ready for final review and grading submission!'
  }
];
