# Pro-SMV Dashboard - Developer Guide

## 📋 Project Overview

This is a comprehensive Pro-SMV (Standard Minute Value) Dashboard built with React, TypeScript, and Tailwind CSS. The dashboard provides a complete management system for garment manufacturing operations, including customer management, machine tracking, operations, style orders, and SMV calculations.

---

## 🏗️ Technology Stack

### Frontend Framework
- **React 18.3.1** - UI library
- **TypeScript** - Type-safe JavaScript
- **Vite 7.2.2** - Build tool and dev server

### Styling
- **Tailwind CSS 3.4.16** - Utility-first CSS framework
- **Tailwind CSS Animate** - Animation utilities
- **Shadcn UI** - Reusable component library

### Routing
- **React Router DOM 6.30.2** - Client-side routing

### Charts & Visualization
- **amCharts5 5.14.4** - Advanced charting library

### UI Components
- **Radix UI** - Headless UI primitives
- **Lucide React** - Icon library

---

## 📁 Project Structure

```
project/
├── public/                      # Static assets (images, icons, SVGs)
├── src/
│   ├── components/              # Reusable components
│   │   ├── charts/             # Chart components
│   │   ├── ui/                 # Shadcn UI components
│   │   ├── CustomerDrawer/     # Customer management drawer
│   │   ├── SearchBar/          # Search component
│   │   ├── Sidebar/            # Navigation sidebar
│   │   ├── StyleOrderDrawer/   # Style order drawer
│   │   └── TopBar/             # Top navigation bar
│   │
│   ├── contexts/               # React Context providers
│   │   └── LanguageContext.tsx # Multi-language support
│   │
│   ├── screens/                # Main application screens
│   │   ├── Dashboard/          # Dashboard with sections
│   │   │   └── sections/       # Dashboard sub-sections
│   │   ├── Customers/          # Customer management
│   │   ├── Machine/            # Machine management
│   │   ├── Operations/         # Operations management
│   │   ├── OperationSequence/  # Operation sequencing
│   │   ├── ProSMV/             # Pro SMV calculation
│   │   ├── StyleAndOrder/      # Style and order management
│   │   └── ThreadConsumption/  # Thread consumption tracking
│   │
│   ├── lib/                    # Utility functions
│   │   └── utils.ts            # Helper utilities
│   │
│   └── index.tsx               # Application entry point
│
├── index.html                  # HTML template
├── package.json                # Dependencies and scripts
├── tailwind.config.js          # Tailwind configuration
├── tailwind.css                # Global styles
├── tsconfig.json               # TypeScript configuration
└── vite.config.ts              # Vite configuration
```

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** (v18 or higher)
- **npm** or **yarn**

### Installation

1. **Extract the project files**
   ```bash
   unzip dashboard-export.zip
   cd dashboard-project
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

   The application will be available at `http://localhost:5173`

4. **Build for production**
   ```bash
   npm run build
   ```

   Production files will be in the `dist/` directory

---

## 🎨 Design System

### Color Palette

#### Primary Colors
- **Blue** - `#1c64f2` (Primary actions, links)
- **Green** - `#10b981` (Success, approved states)
- **Red** - `#dc2626` (Errors, delete actions)
- **Orange** - `#f59e0b` (Warnings, pending states)

#### Neutral Colors
- **Background** - `#f3f4f6`
- **Card Background** - `#ffffff`
- **Text Primary** - `#1f2a37`
- **Text Secondary** - `#6b7280`
- **Border** - `#d1d5db`

#### Table Colors
- **Header** - `#374151` (Dark gray)
- **Alternate Rows** - `#F3F4F6` (Light gray)
- **Hover** - `#e5e7eb`

### Typography

- **Font Family** - Nunito Sans, Inter, System fonts
- **Headings** - Bold, 28px for page titles
- **Body Text** - 14px (text-sm)
- **Small Text** - 12px (text-xs)

### Spacing

- Uses 8px base grid system
- Standard padding: `px-4 py-2.5` for buttons
- Card padding: `p-6`
- Section gaps: `gap-6`

---

## 📱 Screen Overview

### 1. Dashboard (Home)
**Route:** `/`

**Features:**
- Overview statistics (Total Customers, Total Styles, Total Brands, Total Factories)
- Analysis charts (Approval Trend, Average SMV, Pro-SMV Usage, Analysis Data)
- Board listing section
- Product-wise details
- Stage-wise bubble chart
- Style analysis bar chart

**Key Components:**
- `DashboardOverviewSection`
- `AnalysisChartsSection`
- `BoardListingSection`
- `ProductDetailsSection`
- `DataVisualizationSection`
- `StyleAnalysisSection`
- `UserStatsSection`

### 2. Customers
**Route:** `/customers`

**Features:**
- Grid and table view toggle
- Search functionality
- Add new customer
- Download reports
- Customer details: Name, Factory, Type, Brand count, Contact info

**Actions:**
- View customer details
- Edit customer
- Delete customer

### 3. Style and Order
**Route:** `/style-and-order`

**Features:**
- Grid and table view
- Style management
- Order tracking
- Customer and factory association
- Cost SMV and Production SMV

### 4. Machine
**Route:** `/machine`

**Features:**
- Machine inventory
- Grid and table views
- Machine specifications: ID, Name, RPM, Allowance, Type, Stitch Class, Thread Waste
- Factory association

### 5. Operations
**Route:** `/operations`

**Features:**
- Operation management
- Operation details: Number, Description, Machine type, SMV, Work aid
- Status tracking (Pending/Approved)
- Grade and skill classification
- Expandable rows for details

### 6. Operation Sequence
**Route:** `/operation-sequence`

**Features:**
- Sequence management
- Drag and drop functionality (visual representation)
- Grade assignment
- Remarks addition
- Bulk operations (select all)

### 7. Pro SMV
**Route:** `/pro-smv`

**Features:**
- SMV calculation interface
- Operation details form
- Time calculations (Total time, Basic time, Standard time, Target)
- Action buttons (Approve, Send, Save, Disapprove)
- Data table with TMU values
- Analyst selection
- Analysis toolbar (PICK, FOLD, LN. UP, M/C, CUT, DPSE, BASIC, MTM)
- Operation code buttons (P1, F1, L1, M1, C1, D1, G1, A, P2, F2, etc.)

### 8. Thread Consumption
**Route:** `/thread-consumption`

**Features:**
- Thread usage calculation
- Seam length tracking
- SPC (Stitches Per Centimeter)
- Thread factor calculation
- Total thread consumption

---

## 🧩 Key Components

### UI Components (Shadcn)

Located in `src/components/ui/`

- **Avatar** - User profile images
- **Badge** - Status indicators
- **Button** - Action buttons with variants
- **Card** - Content containers
- **Dropdown Menu** - Menu selections
- **Table** - Data tables with alternating rows

### Custom Components

#### TopBar
Navigation header with:
- Welcome message
- Time period selector (3M, 6M, 9M, 12M, All)
- Method/Demo selector
- Language selector
- Notifications
- Dark mode toggle
- User profile

#### Sidebar
Main navigation with icons:
- Dashboard
- Customer
- Style and order
- Machine
- Operations
- Operation sequence
- Pro SMV
- Thread consumption
- Settings
- Log out

#### SearchBar
Reusable search component with:
- Search icon
- Placeholder text
- Value and onChange handlers

#### CustomerDrawer
Side drawer for customer management:
- Add/Edit customer form
- Customer details
- Save and cancel actions

#### StyleOrderDrawer
Side drawer for style and order management:
- Style form
- Order details
- Customer association

---

## 📊 Chart Components

Located in `src/components/charts/`

### 1. ApprovalTrendChart
- Line chart showing approval trends over time
- Uses amCharts5
- Smooth curves with data points

### 2. AverageSMVChart
- Bar chart for average SMV values
- Color-coded by category
- Tooltip on hover

### 3. ProSMVUsageChart
- Usage statistics chart
- Percentage-based visualization

### 4. AnalysisDataChart
- Multi-metric analysis
- Combined chart types

### 5. StageWiseBubbleChart
- Bubble chart for stage analysis
- Size represents values
- Interactive tooltips

### 6. StyleAnalysisBarChart
- Horizontal bar chart
- Style comparison
- Color-coded categories

---

## 🎯 State Management

### React Context

**LanguageContext** (`src/contexts/LanguageContext.tsx`)
- Manages application language
- Provides translation utilities
- Supports multiple languages

### Local State

Most components use React hooks:
- `useState` for component state
- `useEffect` for side effects
- Custom hooks for reusable logic

---

## 🔧 Configuration Files

### package.json
```json
{
  "scripts": {
    "dev": "npx vite",
    "build": "npx vite build"
  },
  "dependencies": {
    "@amcharts/amcharts5": "^5.14.4",
    "@radix-ui/react-avatar": "^1.1.11",
    "@radix-ui/react-slot": "^1.2.4",
    "class-variance-authority": "^0.7.1",
    "clsx": "^2.1.1",
    "lucide-react": "^0.453.0",
    "react": "^18.3.1",
    "react-dom": "^18.3.1",
    "react-router-dom": "^6.30.2",
    "tailwind-merge": "^2.5.4",
    "tailwindcss-animate": "^1.0.7"
  }
}
```

### tailwind.config.js
- Custom color scheme
- Extended utilities
- Animation configurations
- Plugin integrations

### vite.config.ts
- Path aliases (`@/` → `src/components/ui/`)
- React plugin configuration
- Build optimizations

---

## 📝 Data Models

### Customer
```typescript
interface Customer {
  id: number;
  name: string;
  brandCount: number;
  factoryName: string;
  customerType: string;
  phone: string;
  email: string;
}
```

### Machine
```typescript
interface Machine {
  id: string;
  name: string;
  rpm: number;
  allowance: number;
  machineType: string;
  stitchClass: string;
  threadWaste: number;
  factory: string;
  image: string;
}
```

### Operation
```typescript
interface Operation {
  id: string;
  opno: string;
  description: string;
  cart: boolean;
  machineType: string;
  sl: number;
  smv: number;
  workAid: string;
  status: string;
  grade: string;
  skill: string;
}
```

### Style Order
```typescript
interface StyleOrder {
  id: number;
  style: string;
  customerName: string;
  factoryName: string;
  customerType: string;
  costSMV: number;
  orders: number;
  sizeGrid: string;
  prodSMV: string;
  image: string;
}
```

---

## 🎨 Styling Guidelines

### Tailwind Classes

**Common Patterns:**

```tsx
// Buttons
className="px-4 py-2.5 bg-[#1c64f2] hover:bg-[#1a56db] rounded-lg text-white"

// Cards
className="bg-white rounded-lg shadow p-6"

// Tables
className="bg-white rounded-lg shadow overflow-x-auto"

// Table Headers
className="bg-[#374151] text-white font-semibold uppercase text-xs"

// Alternating Rows
className={`${index % 2 === 0 ? 'bg-white' : 'bg-[#F3F4F6]'} hover:bg-gray-100`}

// Input Fields
className="px-3 py-2 border border-[#d1d5db] rounded-lg focus:ring-2 focus:ring-[#1c64f2]"
```

### Responsive Design

- Mobile-first approach
- Breakpoints: `sm:`, `md:`, `lg:`, `xl:`, `2xl:`
- Grid layouts adjust automatically
- Tables scroll horizontally on mobile

---

## 🧪 Testing & Quality

### Code Quality
- TypeScript for type safety
- ESLint rules (configured)
- Consistent naming conventions
- Component-based architecture

### Browser Support
- Modern browsers (Chrome, Firefox, Safari, Edge)
- ES6+ support required
- CSS Grid and Flexbox

---

## 📦 Deployment

### Build Process

1. **Development Build**
   ```bash
   npm run dev
   ```
   - Hot module replacement
   - Source maps enabled
   - Fast refresh

2. **Production Build**
   ```bash
   npm run build
   ```
   - Minified code
   - Optimized assets
   - Tree-shaking enabled
   - Output in `dist/` folder

### Deployment Platforms

**Recommended:**
- Vercel (Zero config)
- Netlify (Drag and drop)
- AWS Amplify
- GitHub Pages

### Environment Variables

Create `.env` file:
```env
VITE_API_URL=your_api_url
VITE_APP_NAME=Pro-SMV Dashboard
```

---

## 🔐 Security Considerations

- No sensitive data in frontend code
- API calls should use environment variables
- Implement authentication (not included in current version)
- Validate user inputs
- Sanitize data before rendering

---

## 🚧 Future Enhancements

### Suggested Improvements

1. **Backend Integration**
   - REST API or GraphQL
   - Database integration (Supabase recommended)
   - Authentication & Authorization

2. **Features**
   - Real-time updates
   - Export to Excel/PDF
   - Advanced filtering
   - Batch operations
   - User roles and permissions

3. **Performance**
   - Code splitting
   - Lazy loading
   - Image optimization
   - Caching strategy

4. **Testing**
   - Unit tests (Jest)
   - Integration tests
   - E2E tests (Playwright/Cypress)

---

## 🐛 Troubleshooting

### Common Issues

**Port already in use:**
```bash
# Kill process on port 5173
npx kill-port 5173
# Or use different port
npm run dev -- --port 3000
```

**Build fails:**
```bash
# Clear cache and reinstall
rm -rf node_modules dist
npm install
npm run build
```

**Styling not applied:**
```bash
# Rebuild Tailwind
npx tailwindcss -i ./tailwind.css -o ./dist/output.css
```

---

## 📞 Support & Contact

### Documentation
- React: https://react.dev/
- Tailwind CSS: https://tailwindcss.com/
- Vite: https://vitejs.dev/
- Shadcn UI: https://ui.shadcn.com/
- amCharts: https://www.amcharts.com/

### Code Conventions
- Use functional components
- Follow React Hooks best practices
- Keep components small and focused
- Use TypeScript interfaces
- Comment complex logic

---

## 📄 License

This project is proprietary. All rights reserved.

---

## 🎯 Quick Start Checklist

- [ ] Extract project files
- [ ] Run `npm install`
- [ ] Start dev server with `npm run dev`
- [ ] Open browser to `http://localhost:5173`
- [ ] Explore the dashboard
- [ ] Customize as needed
- [ ] Build for production
- [ ] Deploy to hosting platform

---

## 📚 Additional Resources

### File Locations
- **Components:** `src/components/`
- **Screens:** `src/screens/`
- **Styles:** `tailwind.css`
- **Assets:** `public/`
- **Config:** Root directory

### Key Files to Review
1. `src/index.tsx` - App entry point
2. `src/screens/Dashboard/Dashboard.tsx` - Main dashboard
3. `src/components/Sidebar/Sidebar.tsx` - Navigation
4. `tailwind.config.js` - Styling configuration

---

**Happy Coding! 🚀**

For questions or issues, refer to the inline comments in the code or check the official documentation of the libraries used.
