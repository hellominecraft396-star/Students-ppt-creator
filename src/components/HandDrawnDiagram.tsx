import React from 'react';

interface HandDrawnDiagramProps {
  type: 'gradient-descent' | 'neural-graph' | 'regularization-contour' | 'attention-matrix';
  inkHex: string;
  jitter: number;
}

export const HandDrawnDiagram: React.FC<HandDrawnDiagramProps> = ({
  type,
  inkHex,
  jitter
}) => {
  // Compute subtle jitter offsets based on slider
  const jOffset = (val: number, factor = 1) => {
    const amplitude = (jitter / 100) * 2 * factor;
    return val + (Math.sin(val * 13.7) * amplitude);
  };

  if (type === 'neural-graph') {
    return (
      <svg className="w-full max-w-[500px] h-36 overflow-visible" viewBox="0 0 540 160">
        <defs>
          <marker id="arrow-crimson" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
            <path d="M 0 0 L 6 3 L 0 6 z" fill="#dc2626" />
          </marker>
          <marker id="arrow-ink" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
            <path d="M 0 0 L 6 3 L 0 6 z" fill={inkHex} />
          </marker>
        </defs>

        {/* Input Nodes */}
        <circle cx="80" cy={jOffset(50)} r="18" fill="none" stroke={inkHex} strokeWidth="2" strokeDasharray="1,0.5" />
        <text x="80" y={jOffset(54)} fill={inkHex} fontFamily="JetBrains Mono" fontSize="12" textAnchor="middle" fontWeight="bold">x₁</text>

        <circle cx="80" cy={jOffset(110)} r="18" fill="none" stroke={inkHex} strokeWidth="2" strokeDasharray="1,0.5" />
        <text x="80" y={jOffset(114)} fill={inkHex} fontFamily="JetBrains Mono" fontSize="12" textAnchor="middle" fontWeight="bold">x₂</text>

        {/* Hidden Layer Nodes */}
        <circle cx="260" cy={jOffset(40)} r="20" fill="none" stroke={inkHex} strokeWidth="2.2" />
        <text x="260" y={jOffset(45)} fill={inkHex} fontFamily="JetBrains Mono" fontSize="12" textAnchor="middle" fontWeight="bold">h₁</text>

        <circle cx="260" cy={jOffset(120)} r="20" fill="none" stroke={inkHex} strokeWidth="2.2" />
        <text x="260" y={jOffset(125)} fill={inkHex} fontFamily="JetBrains Mono" fontSize="12" textAnchor="middle" fontWeight="bold">h₂</text>

        {/* Output Node */}
        <circle cx="440" cy={jOffset(80)} r="20" fill="none" stroke={inkHex} strokeWidth="2.2" />
        <text x="440" y={jOffset(85)} fill={inkHex} fontFamily="JetBrains Mono" fontSize="12" textAnchor="middle" fontWeight="bold">ŷ</text>

        {/* Forward connections (dashed grey) */}
        <path d={`M 98 ${jOffset(50)} L 240 ${jOffset(40)}`} stroke={inkHex} strokeWidth="1.6" strokeDasharray="4,3" opacity="0.6" />
        <path d={`M 98 ${jOffset(50)} L 240 ${jOffset(120)}`} stroke={inkHex} strokeWidth="1.6" strokeDasharray="4,3" opacity="0.6" />
        <path d={`M 98 ${jOffset(110)} L 240 ${jOffset(40)}`} stroke={inkHex} strokeWidth="1.6" strokeDasharray="4,3" opacity="0.6" />
        <path d={`M 98 ${jOffset(110)} L 240 ${jOffset(120)}`} stroke={inkHex} strokeWidth="1.6" strokeDasharray="4,3" opacity="0.6" />
        <path d={`M 280 ${jOffset(40)} L 420 ${jOffset(80)}`} stroke={inkHex} strokeWidth="1.6" strokeDasharray="4,3" opacity="0.6" />
        <path d={`M 280 ${jOffset(120)} L 420 ${jOffset(80)}`} stroke={inkHex} strokeWidth="1.6" strokeDasharray="4,3" opacity="0.6" />

        {/* Reverse Gradient backpropagation arrows (Crimson Hand-drawn) */}
        <path d={`M 418 ${jOffset(74)} Q 350 ${jOffset(35)} 282 ${jOffset(36)}`} fill="none" stroke="#dc2626" strokeWidth="2" markerEnd="url(#arrow-crimson)" />
        <text x="350" y="24" fill="#dc2626" fontFamily="JetBrains Mono" fontSize="10" fontWeight="bold">∂L/∂h₁</text>

        <path d={`M 418 ${jOffset(86)} Q 350 ${jOffset(125)} 282 ${jOffset(124)}`} fill="none" stroke="#dc2626" strokeWidth="2" markerEnd="url(#arrow-crimson)" />
        <text x="350" y="152" fill="#dc2626" fontFamily="JetBrains Mono" fontSize="10" fontWeight="bold">∂L/∂h₂</text>

        <path d={`M 238 ${jOffset(40)} Q 170 ${jOffset(25)} 100 ${jOffset(45)}`} fill="none" stroke="#dc2626" strokeWidth="1.8" markerEnd="url(#arrow-crimson)" />
        <text x="160" y="28" fill="#dc2626" fontFamily="JetBrains Mono" fontSize="9.5">δ₁ · W₁</text>
      </svg>
    );
  }

  if (type === 'regularization-contour') {
    return (
      <svg className="w-full max-w-[500px] h-36 overflow-visible" viewBox="0 0 540 160">
        <defs>
          <marker id="arrow-green" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
            <path d="M 0 0 L 6 3 L 0 6 z" fill="#047857" />
          </marker>
        </defs>

        {/* Coordinate axes */}
        <line x1="50" y1="80" x2="490" y2="80" stroke={inkHex} strokeWidth="1.5" strokeDasharray="3,3" />
        <line x1="270" y1="10" x2="270" y2="150" stroke={inkHex} strokeWidth="1.5" strokeDasharray="3,3" />
        <text x="495" y="84" fill={inkHex} fontFamily="JetBrains Mono" fontSize="10.5">w₁</text>
        <text x="275" y="20" fill={inkHex} fontFamily="JetBrains Mono" fontSize="10.5">w₂</text>

        {/* L1 Diamond (Sparsity prior) */}
        <polygon points="270,30 330,80 270,130 210,80" fill="none" stroke="#2563eb" strokeWidth="2.2" strokeLinejoin="round" />
        <text x="220" y="60" fill="#2563eb" fontFamily="JetBrains Mono" fontSize="10" fontWeight="bold">||w||₁ ≤ C</text>

        {/* Loss function unconstrained ellipses */}
        <ellipse cx="370" cy="50" rx="40" ry="22" transform="rotate(-25 370 50)" fill="none" stroke={inkHex} strokeWidth="1.4" opacity="0.5" strokeDasharray="4,2" />
        <ellipse cx="370" cy="50" rx="70" ry="38" transform="rotate(-25 370 50)" fill="none" stroke={inkHex} strokeWidth="1.8" opacity="0.7" strokeDasharray="4,2" />
        <ellipse cx="370" cy="50" rx="100" ry="54" transform="rotate(-25 370 50)" fill="none" stroke={inkHex} strokeWidth="2.2" />

        {/* Intersection Point (Corner = Sparse zero) */}
        <circle cx="330" cy="80" r="5" fill="#dc2626" />
        <path d="M 390 115 L 336 84" stroke="#dc2626" strokeWidth="1.5" markerEnd="url(#arrow-crimson)" />
        <text x="395" y="125" fill="#dc2626" fontFamily="JetBrains Mono" fontSize="10.5" fontWeight="bold">Corner Intersection (w₂ = 0)</text>

        <text x="140" y="140" fill="#047857" fontFamily="JetBrains Mono" fontSize="10">Exact Coordinate Sparsity</text>
      </svg>
    );
  }

  if (type === 'attention-matrix') {
    return (
      <svg className="w-full max-w-[500px] h-36 overflow-visible" viewBox="0 0 540 160">
        {/* Softmax Heatmap Grid with Hand-drawn cell boundaries */}
        <g transform="translate(60, 20)">
          {/* Row 1 */}
          <rect x="0" y="0" width="30" height="30" fill="#1d4ed8" fillOpacity="0.85" stroke={inkHex} strokeWidth="1" />
          <rect x="34" y="0" width="30" height="30" fill="#1d4ed8" fillOpacity="0.25" stroke={inkHex} strokeWidth="1" />
          <rect x="68" y="0" width="30" height="30" fill="#1d4ed8" fillOpacity="0.10" stroke={inkHex} strokeWidth="1" />
          <rect x="102" y="0" width="30" height="30" fill="#1d4ed8" fillOpacity="0.05" stroke={inkHex} strokeWidth="1" />

          {/* Row 2 */}
          <rect x="0" y="34" width="30" height="30" fill="#1d4ed8" fillOpacity="0.30" stroke={inkHex} strokeWidth="1" />
          <rect x="34" y="34" width="30" height="30" fill="#1d4ed8" fillOpacity="0.75" stroke={inkHex} strokeWidth="1" />
          <rect x="68" y="34" width="30" height="30" fill="#1d4ed8" fillOpacity="0.40" stroke={inkHex} strokeWidth="1" />
          <rect x="102" y="34" width="30" height="30" fill="#1d4ed8" fillOpacity="0.15" stroke={inkHex} strokeWidth="1" />

          {/* Row 3 */}
          <rect x="0" y="68" width="30" height="30" fill="#1d4ed8" fillOpacity="0.10" stroke={inkHex} strokeWidth="1" />
          <rect x="34" y="68" width="30" height="30" fill="#1d4ed8" fillOpacity="0.20" stroke={inkHex} strokeWidth="1" />
          <rect x="68" y="68" width="30" height="30" fill="#1d4ed8" fillOpacity="0.90" stroke={inkHex} strokeWidth="1" />
          <rect x="102" y="68" width="30" height="30" fill="#1d4ed8" fillOpacity="0.60" stroke={inkHex} strokeWidth="1" />

          {/* Labels */}
          <text x="-15" y="20" fill={inkHex} fontFamily="JetBrains Mono" fontSize="9">Token₁</text>
          <text x="-15" y="54" fill={inkHex} fontFamily="JetBrains Mono" fontSize="9">Token₂</text>
          <text x="-15" y="88" fill={inkHex} fontFamily="JetBrains Mono" fontSize="9">Token₃</text>

          <text x="10" y="-8" fill={inkHex} fontFamily="JetBrains Mono" fontSize="9">K₁</text>
          <text x="44" y="-8" fill={inkHex} fontFamily="JetBrains Mono" fontSize="9">K₂</text>
          <text x="78" y="-8" fill={inkHex} fontFamily="JetBrains Mono" fontSize="9">K₃</text>
          <text x="112" y="-8" fill={inkHex} fontFamily="JetBrains Mono" fontSize="9">K₄</text>
        </g>

        {/* Projection Multiply Bracket */}
        <text x="235" y="80" fill={inkHex} fontFamily="JetBrains Mono" fontSize="18" fontWeight="bold">×</text>

        {/* Value Vector Matrix V */}
        <g transform="translate(265, 20)">
          <rect x="0" y="0" width="80" height="98" fill="none" stroke={inkHex} strokeWidth="1.8" strokeDasharray="3,2" />
          <text x="40" y="54" fill={inkHex} fontFamily="JetBrains Mono" fontSize="12" textAnchor="middle">Values V</text>
          <text x="40" y="70" fill={inkHex} fontFamily="JetBrains Mono" fontSize="9" textAnchor="middle" opacity="0.7">d_model dim</text>
        </g>

        <text x="360" y="80" fill={inkHex} fontFamily="JetBrains Mono" fontSize="18" fontWeight="bold">=</text>

        {/* Result Context Vectors */}
        <g transform="translate(390, 20)">
          <rect x="0" y="0" width="80" height="98" fill="#1d4ed8" fillOpacity="0.08" stroke="#1d4ed8" strokeWidth="2" />
          <text x="40" y="50" fill="#1d4ed8" fontFamily="JetBrains Mono" fontSize="11" textAnchor="middle" fontWeight="bold">Context</text>
          <text x="40" y="68" fill="#1d4ed8" fontFamily="JetBrains Mono" fontSize="9.5" textAnchor="middle">Output (Z)</text>
        </g>

        {/* Annotation */}
        <text x="180" y="145" fill="#dc2626" fontFamily="JetBrains Mono" fontSize="10">Diagonal token self-affinity peak (~0.85)</text>
      </svg>
    );
  }

  // Default: Gradient Descent Loss Landscape (as in reference Image_2_936df935.html)
  return (
    <svg className="w-full max-w-[500px] h-36 overflow-visible" viewBox="0 0 540 160">
      <defs>
        <marker id="arrow-green-ref" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
          <path d="M 0 0 L 6 3 L 0 6 z" fill="#047857" />
        </marker>
        <marker id="arrow-red-ref" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
          <path d="M 0 0 L 6 3 L 0 6 z" fill="#dc2626" />
        </marker>
      </defs>

      {/* Axis */}
      <path d={`M 40 ${jOffset(140)} L 500 ${jOffset(140)}`} stroke={inkHex} strokeDasharray="2,2" strokeLinecap="round" strokeWidth="1.8" />
      <path d={`M 40 ${jOffset(140)} L 40 ${jOffset(20)}`} stroke={inkHex} strokeDasharray="2,2" strokeLinecap="round" strokeWidth="1.8" />
      <text fill={inkHex} fontFamily="JetBrains Mono" fontSize="11" x="505" y="144">Weight θ</text>
      <text fill={inkHex} fontFamily="JetBrains Mono" fontSize="11" x="25" y="16">Loss J(θ)</text>

      {/* Non-convex Curve (hand-jitter look) */}
      <path
        d={`M 45 45 C 90 ${jOffset(120)}, 140 ${jOffset(135)}, 190 ${jOffset(70)} C 230 ${jOffset(20)}, 280 ${jOffset(150)}, 360 ${jOffset(120)} C 410 ${jOffset(98)}, 450 ${jOffset(40)}, 490 ${jOffset(35)}`}
        fill="none"
        stroke={inkHex}
        strokeLinecap="round"
        strokeWidth="2.6"
      />

      {/* Descent Points and Arrows */}
      <circle cx="100" cy={jOffset(102)} fill="#dc2626" r="4" />
      <circle cx="140" cy={jOffset(115)} fill="#dc2626" r="3.5" />
      <circle cx="170" cy={jOffset(98)} fill="#dc2626" r="3" />
      <path d={`M 100 ${jOffset(102)} Q 120 ${jOffset(115)} 136 ${jOffset(114)}`} fill="none" stroke="#dc2626" strokeDasharray="3,2" strokeWidth="1.6" />
      <text fill="#dc2626" fontFamily="JetBrains Mono" fontSize="10" fontWeight="bold" x="110" y="90">η Step 1</text>

      {/* Annotations */}
      <path d="M 280 40 L 260 70" markerEnd="url(#arrow-green-ref)" stroke="#047857" strokeDasharray="2,2" strokeWidth="1.4" />
      <text fill="#047857" fontFamily="JetBrains Mono" fontSize="10.5" x="285" y="38">Local Minima Obstacle</text>
      <text fill={inkHex} fontFamily="JetBrains Mono" fontSize="10.5" x="360" y="142">Global Minimum</text>
    </svg>
  );
};
