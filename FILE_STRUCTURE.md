# Dashboard File Structure & Component Guide

## 📂 Complete File Tree

```
project/
│
├── public/                                  # Static Assets (Images, Icons, SVGs)
│   ├── ---29--1-4.png                      # Product icon
│   ├── adjustments-horizontal.svg           # Filter icon
│   ├── adjustments-horizontal-1.svg         # Filter icon variant
│   ├── arrow-down-to-bracket.svg           # Download icon
│   ├── arrow-right-to-bracket-outline.svg  # Login icon
│   ├── arrow-up-outline.svg                # Upload icon
│   ├── avatar.png                          # User avatar
│   ├── avatar-2.png                        # User avatar variant
│   ├── avatar-3.png                        # User avatar variant
│   ├── avatar-4.svg                        # User avatar SVG
│   ├── badge-check.svg                     # Verification badge
│   ├── badge-check-outline.svg             # Verification badge outline
│   ├── Banner 1..png                       # Banner image
│   ├── bell.svg                            # Notification icon
│   ├── calendar-month.svg                  # Calendar icon
│   ├── chart-pie.svg                       # Chart icon
│   ├── chart-pie-1.svg                     # Chart icon variant
│   ├── chevron-down.svg                    # Dropdown arrow
│   ├── chevron-down-1.svg                  # Dropdown arrow variant
│   ├── clock.svg                           # Time icon
│   ├── cog.svg                             # Settings icon
│   ├── computer-speaker.svg                # Audio icon
│   ├── draw-square.svg                     # Drawing icon
│   ├── ellipse-*.svg                       # Various ellipse shapes
│   ├── flags---us.svg                      # US flag
│   ├── Frame.svg                           # Frame icon
│   ├── frame-24.svg                        # Frame icon variant
│   ├── ic-trending-up-24px*.png            # Trending icons
│   ├── info.svg                            # Information icon
│   ├── link.svg                            # Link icon
│   ├── moon.svg                            # Dark mode icon
│   ├── ordored-list.svg                    # List icon
│   ├── polygon-4.svg                       # Shape icon
│   ├── rectangle-list.svg                  # List icon
│   ├── subtract.svg                        # Math icon
│   ├── subtract-1.svg                      # Math icon variant
│   ├── users-group.svg                     # Group icon
│   ├── vector-*.svg                        # Various vector icons
│   ├── x-circle.svg                        # Close icon
│   └── year---charts.svg                   # Year chart icon
│
├── src/                                     # Source Code
│   │
│   ├── components/                          # Reusable Components
│   │   │
│   │   ├── charts/                         # Chart Components
│   │   │   ├── AnalysisDataChart.tsx       # Analysis data visualization
│   │   │   ├── ApprovalTrendChart.tsx      # Approval trend line chart
│   │   │   ├── AverageSMVChart.tsx         # Average SMV bar chart
│   │   │   ├── ProSMVUsageChart.tsx        # Pro-SMV usage statistics
│   │   │   ├── StageWiseBubbleChart.tsx    # Stage analysis bubble chart
│   │   │   └── StyleAnalysisBarChart.tsx   # Style comparison bar chart
│   │   │
│   │   ├── ui/                             # Shadcn UI Components
│   │   │   ├── avatar.tsx                  # Avatar component
│   │   │   ├── badge.tsx                   # Badge component
│   │   │   ├── button.tsx                  # Button component with variants
│   │   │   ├── card.tsx                    # Card container component
│   │   │   ├── dropdown-menu.tsx           # Dropdown menu component
│   │   │   └── table.tsx                   # Table component
│   │   │
│   │   ├── CustomerDrawer/                 # Customer Management Drawer
│   │   │   ├── CustomerDrawer.tsx          # Drawer component for customers
│   │   │   └── index.ts                    # Export file
│   │   │
│   │   ├── SearchBar/                      # Search Component
│   │   │   ├── SearchBar.tsx               # Search input with icon
│   │   │   └── index.ts                    # Export file
│   │   │
│   │   ├── Sidebar/                        # Navigation Sidebar
│   │   │   ├── Sidebar.tsx                 # Main navigation component
│   │   │   └── index.ts                    # Export file
│   │   │
│   │   ├── StyleOrderDrawer/               # Style Order Drawer
│   │   │   ├── StyleOrderDrawer.tsx        # Drawer for style orders
│   │   │   └── index.ts                    # Export file
│   │   │
│   │   └── TopBar/                         # Top Navigation Bar
│   │       ├── TopBar.tsx                  # Header navigation component
│   │       └── index.ts                    # Export file
│   │
│   ├── contexts/                            # React Context Providers
│   │   └── LanguageContext.tsx             # Multi-language support context
│   │
│   ├── screens/                             # Main Application Screens
│   │   │
│   │   ├── Dashboard/                      # Dashboard Screen
│   │   │   ├── Dashboard.tsx               # Main dashboard component
│   │   │   ├── index.ts                    # Export file
│   │   │   │
│   │   │   └── sections/                   # Dashboard Sub-sections
│   │   │       │
│   │   │       ├── AnalysisChartsSection/
│   │   │       │   ├── AnalysisChartsSection.tsx  # Analysis charts display
│   │   │       │   └── index.ts
│   │   │       │
│   │   │       ├── BoardListingSection/
│   │   │       │   ├── BoardListingSection.tsx    # Brand listing table
│   │   │       │   └── index.ts
│   │   │       │
│   │   │       ├── DashboardOverviewSection/
│   │   │       │   ├── DashboardOverviewSection.tsx  # Overview stats
│   │   │       │   └── index.ts
│   │   │       │
│   │   │       ├── DataVisualizationSection/
│   │   │       │   ├── DataVisualizationSection.tsx  # Data visualizations
│   │   │       │   └── index.ts
│   │   │       │
│   │   │       ├── ProductDetailsSection/
│   │   │       │   ├── ProductDetailsSection.tsx     # Product details table
│   │   │       │   └── index.ts
│   │   │       │
│   │   │       ├── StyleAnalysisSection/
│   │   │       │   ├── StyleAnalysisSection.tsx      # Style analysis chart
│   │   │       │   └── index.ts
│   │   │       │
│   │   │       └── UserStatsSection/
│   │   │           ├── UserStatsSection.tsx          # User statistics
│   │   │           └── index.ts
│   │   │
│   │   ├── Customers/                      # Customer Management Screen
│   │   │   ├── Customers.tsx               # Customer list with grid/table view
│   │   │   └── index.ts
│   │   │
│   │   ├── Machine/                        # Machine Management Screen
│   │   │   ├── Machine.tsx                 # Machine list component
│   │   │   ├── index.ts
│   │   │   │
│   │   │   └── components/
│   │   │       ├── MachineGrid.tsx         # Grid view for machines
│   │   │       └── MachineTable.tsx        # Table view for machines
│   │   │
│   │   ├── Operations/                     # Operations Management Screen
│   │   │   ├── Operations.tsx              # Operations list component
│   │   │   ├── index.ts
│   │   │   │
│   │   │   └── components/
│   │   │       ├── OperationDrawer.tsx     # Operation details drawer
│   │   │       └── OperationsTable.tsx     # Operations table view
│   │   │
│   │   ├── OperationSequence/              # Operation Sequence Screen
│   │   │   ├── OperationSequence.tsx       # Sequence management component
│   │   │   └── index.ts
│   │   │
│   │   ├── ProSMV/                         # Pro SMV Calculator Screen
│   │   │   ├── ProSMV.tsx                  # SMV calculation interface
│   │   │   └── index.ts
│   │   │
│   │   ├── StyleAndOrder/                  # Style and Order Management
│   │   │   ├── StyleAndOrder.tsx           # Style and order list
│   │   │   ├── index.ts
│   │   │   │
│   │   │   └── components/
│   │   │       ├── StyleOrderGrid.tsx      # Grid view for styles
│   │   │       └── StyleOrderTable.tsx     # Table view for styles
│   │   │
│   │   └── ThreadConsumption/              # Thread Consumption Screen
│   │       ├── ThreadConsumption.tsx       # Thread consumption tracking
│   │       └── index.ts
│   │
│   ├── lib/                                 # Utility Functions
│   │   └── utils.ts                        # Helper functions (cn, etc.)
│   │
│   └── index.tsx                           # Application Entry Point
│
├── .bolt/                                   # Bolt Configuration
│   └── ignore                              # Files to ignore in Bolt
│
├── index.html                              # HTML Template
├── package.json                            # NPM Configuration & Dependencies
├── package-lock.json                       # Dependency Lock File
├── tailwind.config.js                      # Tailwind CSS Configuration
├── tailwind.css                            # Global CSS & Tailwind Imports
├── tsconfig.json                           # TypeScript Configuration
├── tsconfig.app.json                       # TypeScript App Configuration
├── tsconfig.node.json                      # TypeScript Node Configuration
├── vite.config.ts                          # Vite Build Configuration
├── .env                                    # Environment Variables (create this)
├── .gitignore                              # Git Ignore Rules
│
├── README.md                               # Project Overview
├── DEVELOPER_GUIDE.md                      # Comprehensive Developer Guide
├── INSTALLATION.md                         # Installation Instructions
└── FILE_STRUCTURE.md                       # This File
```

---

## 📋 Component Descriptions

### Core Components

#### **TopBar** (`src/components/TopBar/`)
- Purpose: Main header navigation
- Features:
  - Welcome message
  - Time period selector (3M, 6M, 9M, 12M, All)
  - Method/Demo dropdown
  - Language selector
  - Notifications bell
  - Dark mode toggle
  - User profile with avatar

#### **Sidebar** (`src/components/Sidebar/`)
- Purpose: Main application navigation
- Routes:
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
- Features: Active route highlighting, icons

#### **SearchBar** (`src/components/SearchBar/`)
- Purpose: Reusable search input
- Props: `value`, `onChange`, `placeholder`
- Features: Search icon, debouncing (optional)

#### **CustomerDrawer** (`src/components/CustomerDrawer/`)
- Purpose: Add/Edit customer form
- Features:
  - Form fields for customer details
  - Save and cancel actions
  - Validation

#### **StyleOrderDrawer** (`src/components/StyleOrderDrawer/`)
- Purpose: Add/Edit style order form
- Features:
  - Style details form
  - Order information
  - Customer association

---

## 📊 Screen Components

### 1. Dashboard (`src/screens/Dashboard/`)

Main dashboard with multiple sections:

#### **DashboardOverviewSection**
- Four stat cards:
  - Total Customers
  - Total Styles
  - Total Brands
  - Total Factories
- Color-coded with icons

#### **AnalysisChartsSection**
- Grid of 4 charts:
  - Approval Trend Chart
  - Average SMV Chart
  - Pro-SMV Usage Chart
  - Analysis Data Chart

#### **BoardListingSection**
- Table showing brand listing
- Columns: Brand Name, Total Style, Avg Pro SMV, Avg Cost SMV
- Avatars for brands
- Alternating row colors

#### **ProductDetailsSection**
- Product-wise details table
- Columns: Category, Total Style, Avg Pro SMV, Avg Cost SMV
- Icons for product categories

#### **DataVisualizationSection**
- Stage-wise bubble chart
- Interactive visualization

#### **StyleAnalysisSection**
- Horizontal bar chart
- Style comparison

#### **UserStatsSection**
- User activity statistics

---

### 2. Customers (`src/screens/Customers/`)

Customer management interface:

**Features:**
- Grid and table view toggle
- Search functionality
- Add new customer button
- Download report button
- Sort options

**Table Columns:**
- SNO
- Customer Name
- Factory Name
- Customer Type
- No. of Brand
- Email
- Phone
- Actions (Edit, Delete)

**Grid View:**
- Card-based layout
- Customer avatar
- Key information
- Action buttons

---

### 3. Style and Order (`src/screens/StyleAndOrder/`)

Style and order management:

**Components:**
- `StyleOrderGrid.tsx` - Grid view with cards
- `StyleOrderTable.tsx` - Table view with data

**Table Columns:**
- SNO
- Style
- Customer Name
- Factory Name
- Customer Type
- Cost SMV
- Orders
- Size Grid
- Prod. SMV

---

### 4. Machine (`src/screens/Machine/`)

Machine inventory management:

**Components:**
- `MachineGrid.tsx` - Grid view of machines
- `MachineTable.tsx` - Detailed table view

**Table Columns:**
- Machine ID
- Machine Name
- RPM
- Allowance
- Machine Type
- Stitch Class
- Thread Waste
- Factory
- Actions

---

### 5. Operations (`src/screens/Operations/`)

Operations tracking:

**Components:**
- `OperationsTable.tsx` - Main operations table
- `OperationDrawer.tsx` - Operation details drawer

**Table Columns:**
- Expand button
- OPNO
- Description
- Cart icon
- Machine Type
- SL
- SMV
- Work Aid
- Status (badge)
- Grade
- Skill
- Actions

---

### 6. Operation Sequence (`src/screens/OperationSequence/`)

Operation sequencing interface:

**Features:**
- Drag and drop rows (visual)
- Bulk selection
- Grade dropdown per row
- Remarks input per row
- Delete functionality

**Table Columns:**
- Checkbox
- Drag handle
- Seq No
- OPNO
- Description
- SMV
- Machine
- Grade (editable)
- Remarks (editable)
- Actions

---

### 7. Pro SMV (`src/screens/ProSMV/`)

SMV calculation interface:

**Main Sections:**

1. **Top Filters:**
   - Method demo dropdown
   - Operation number input
   - Size input (XS-XXL)
   - Production dropdown

2. **Operation Details Card (Left):**
   - Border: Green (2px)
   - Blue indicator bar
   - Fields:
     - Description, Machine, Grade (read-only)
     - Pers. Allowance, Cost Allowance, S Length (read-only)
     - SPC, B Allowance, Qt Allowance (editable dropdowns/inputs)
   - Calculated values:
     - Total time, Basic time, Standard time, Target (read-only)
   - Action buttons:
     - Approve (green)
     - Send (orange)
     - Save (pink)
     - Disapprove (red)

3. **Data Table (Right):**
   - Clean table with no extra buttons
   - Columns: Checkbox, SNO, CODE, FREQ, DESCRIPTION, TMU, EXT TMU, ALLOW
   - Alternating row colors
   - Drag handle icon in first column

4. **Analyst Section:**
   - Microphone button (pink)
   - Select Analyst dropdown
   - Add user button (blue)

5. **Analysis Toolbar:**
   - Dark gray background
   - Buttons: PICK, FOLD, LN. UP, M/C, CUT, DPSE, BASIC, MTM
   - Icons with labels

6. **Operation Code Grid:**
   - 8 columns on desktop
   - Buttons: P1, F1, L1, M1, C1, D1, G1, A, P2, F2, L2, M2, C2, D2, G2, B
   - Green borders (P, F, L, M, C, D)
   - Orange borders (G, A, B)
   - Edit icon on right side

---

### 8. Thread Consumption (`src/screens/ThreadConsumption/`)

Thread usage tracking:

**Features:**
- Download report button
- CM/Garment display
- T-shirt selector
- Select Costing dropdown

**Table Columns:**
- Seq No
- OPNO
- Description
- Std. Min
- Subsection
- Machine
- Seam Length
- SPC
- Thread Factor
- Total Thread

---

## 🎨 UI Components (`src/components/ui/`)

### Avatar
```tsx
<Avatar>
  <AvatarImage src="/avatar.png" />
  <AvatarFallback>RJ</AvatarFallback>
</Avatar>
```

### Badge
```tsx
<Badge variant="success">Approved</Badge>
<Badge variant="warning">Pending</Badge>
```

### Button
```tsx
<Button variant="default">Click me</Button>
<Button variant="outline">Cancel</Button>
<Button variant="ghost">Icon only</Button>
```

### Card
```tsx
<Card>
  <CardHeader>
    <CardTitle>Title</CardTitle>
  </CardHeader>
  <CardContent>Content</CardContent>
</Card>
```

### Dropdown Menu
```tsx
<DropdownMenu>
  <DropdownMenuTrigger>Open</DropdownMenuTrigger>
  <DropdownMenuContent>
    <DropdownMenuItem>Item 1</DropdownMenuItem>
  </DropdownMenuContent>
</DropdownMenu>
```

### Table
```tsx
<Table>
  <TableHeader>
    <TableRow>
      <TableHead>Column</TableHead>
    </TableRow>
  </TableHeader>
  <TableBody>
    <TableRow>
      <TableCell>Data</TableCell>
    </TableRow>
  </TableBody>
</Table>
```

---

## 📊 Chart Components (`src/components/charts/`)

### ApprovalTrendChart
- **Type:** Line chart
- **Library:** amCharts5
- **Data:** Time series with approval counts
- **Features:** Tooltips, smooth curves

### AverageSMVChart
- **Type:** Bar chart
- **Data:** Average SMV by category
- **Features:** Color-coded bars, labels

### ProSMVUsageChart
- **Type:** Usage statistics
- **Data:** Percentage-based metrics

### AnalysisDataChart
- **Type:** Combined chart
- **Data:** Multi-metric analysis

### StageWiseBubbleChart
- **Type:** Bubble chart
- **Data:** Stage analysis with size values
- **Features:** Interactive tooltips

### StyleAnalysisBarChart
- **Type:** Horizontal bar chart
- **Data:** Style comparison
- **Features:** Color-coded categories

---

## 🗂️ Data Models

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

---

## 🎯 Key Files to Review

1. **Entry Point:**
   - `src/index.tsx` - App initialization

2. **Main Layout:**
   - `src/components/Sidebar/Sidebar.tsx` - Navigation
   - `src/components/TopBar/TopBar.tsx` - Header

3. **Main Screens:**
   - `src/screens/Dashboard/Dashboard.tsx` - Dashboard
   - `src/screens/ProSMV/ProSMV.tsx` - Pro SMV (complex screen)

4. **Configuration:**
   - `tailwind.config.js` - Styling
   - `vite.config.ts` - Build
   - `tsconfig.json` - TypeScript

---

## 📝 Notes

- All components use TypeScript
- Tailwind CSS for styling
- Functional components with hooks
- Responsive design (mobile, tablet, desktop)
- Reusable component pattern
- Proper file organization with index.ts exports

---

**For detailed documentation, see DEVELOPER_GUIDE.md**
