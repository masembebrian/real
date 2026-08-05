'use client'

import { useMemo, useState } from 'react'
import type { LucideIcon } from 'lucide-react'
import {
  AlertCircle,
  ArrowUpRight,
  BarChart3,
  Bell,
  Calendar,
  Check,
  CheckCircle2,
  ChevronDown,
  ChevronRight,
  Clock3,
  Eye,
  ExternalLink,
  Filter,
  Globe2,
  HelpCircle,
  LayoutDashboard,
  LayoutTemplate,
  Mail,
  Menu,
  MoreHorizontal,
  Monitor,
  MousePointer2,
  Pencil,
  PieChart,
  Plus,
  Plug,
  RefreshCw,
  Search,
  Send,
  Settings,
  ShieldCheck,
  Sparkles,
  Target,
  UserPlus,
  Users,
  Workflow,
  X,
  Zap,
} from 'lucide-react'

type SectionId = 'overview' | 'campaigns' | 'automations' | 'audience' | 'templates' | 'analytics' | 'integrations' | 'settings'
type CampaignStatus = 'Sent' | 'Scheduled' | 'Draft'
type Tone = 'coral' | 'violet' | 'blue' | 'mint' | 'gold'

type Campaign = {
  name: string
  description: string
  status: CampaignStatus
  date: string
  sent: string
  open: string
  click: string
  tone: Tone
  initials: string
}

type NavItem = {
  id: SectionId
  label: string
  icon: LucideIcon
  badge?: string
}

const navGroups: { label: string; items: NavItem[] }[] = [
  {
    label: 'Workspace',
    items: [
      { id: 'overview', label: 'Overview', icon: LayoutDashboard },
      { id: 'campaigns', label: 'Campaigns', icon: Send, badge: '12' },
      { id: 'automations', label: 'Automations', icon: Workflow },
      { id: 'audience', label: 'Audience', icon: Users, badge: '24.9k' },
      { id: 'templates', label: 'Templates', icon: LayoutTemplate },
    ],
  },
  {
    label: 'Measure',
    items: [{ id: 'analytics', label: 'Analytics', icon: BarChart3 }],
  },
  {
    label: 'Manage',
    items: [
      { id: 'integrations', label: 'Integrations', icon: Plug },
      { id: 'settings', label: 'Settings', icon: Settings },
    ],
  },
]

const campaigns: Campaign[] = [
  {
    name: 'June product update',
    description: 'Product newsletter',
    status: 'Sent',
    date: 'Jun 18, 2024',
    sent: '48,280',
    open: '54.8%',
    click: '12.4%',
    tone: 'violet',
    initials: 'JP',
  },
  {
    name: 'Summer sale — early access',
    description: 'Promotional campaign',
    status: 'Scheduled',
    date: 'Jun 27, 2024',
    sent: '—',
    open: '—',
    click: '—',
    tone: 'coral',
    initials: 'SS',
  },
  {
    name: 'Welcome series · email 02',
    description: 'Automated journey',
    status: 'Sent',
    date: 'Jun 14, 2024',
    sent: '8,642',
    open: '68.2%',
    click: '18.7%',
    tone: 'blue',
    initials: 'WS',
  },
  {
    name: 'Community notes / June',
    description: 'Monthly newsletter',
    status: 'Draft',
    date: 'Edited yesterday',
    sent: '—',
    open: '—',
    click: '—',
    tone: 'mint',
    initials: 'CN',
  },
  {
    name: 'Re-engage inactive subscribers',
    description: 'Win-back campaign',
    status: 'Sent',
    date: 'Jun 08, 2024',
    sent: '16,905',
    open: '31.6%',
    click: '6.2%',
    tone: 'gold',
    initials: 'RI',
  },
]

const kpis = [
  {
    label: 'Total emails sent',
    value: '1,284,920',
    change: '+12.8%',
    note: 'vs. last 30 days',
    icon: Send,
    tone: 'coral',
    spark: 'spark-coral',
    points: '2,28 14,24 26,27 38,19 50,21 62,11 74,16 86,7 98,10 110,3',
  },
  {
    label: 'Avg. open rate',
    value: '42.8%',
    change: '+4.6%',
    note: 'vs. last 30 days',
    icon: Eye,
    tone: 'violet',
    spark: 'spark-violet',
    points: '2,20 14,22 26,17 38,18 50,12 62,15 74,8 86,10 98,5 110,7',
  },
  {
    label: 'Click-through rate',
    value: '8.9%',
    change: '+1.2%',
    note: 'vs. last 30 days',
    icon: MousePointer2,
    tone: 'blue',
    spark: 'spark-blue',
    points: '2,24 14,18 26,20 38,14 50,19 62,11 74,13 86,9 98,12 110,4',
  },
  {
    label: 'Attributed revenue',
    value: '$84,260',
    change: '+18.3%',
    note: 'vs. last 30 days',
    icon: Target,
    tone: 'mint',
    spark: 'spark-mint',
    points: '2,27 14,25 26,25 38,21 50,23 62,15 74,14 86,12 98,5 110,2',
  },
]

const sectionMeta: Record<SectionId, { eyebrow: string; title: string; description: string }> = {
  overview: {
    eyebrow: 'Wednesday, June 26, 2024',
    title: 'Good morning, Olivia.',
    description: "Here’s what’s happening with your audience today.",
  },
  campaigns: {
    eyebrow: 'Campaign workspace',
    title: 'Campaigns',
    description: 'Create, send, and learn from every message in one place.',
  },
  automations: {
    eyebrow: 'Always-on journeys',
    title: 'Automations',
    description: 'Keep your audience moving with thoughtful, timely journeys.',
  },
  audience: {
    eyebrow: 'Your people, organized',
    title: 'Audience',
    description: 'Understand your subscribers and reach the right people.',
  },
  templates: {
    eyebrow: 'Content library',
    title: 'Templates',
    description: 'Start with a polished foundation and make it yours.',
  },
  analytics: {
    eyebrow: 'Performance center',
    title: 'Analytics',
    description: 'Turn engagement data into your next best send.',
  },
  integrations: {
    eyebrow: 'Connected tools',
    title: 'Integrations',
    description: 'Bring your favorite tools into your email workflow.',
  },
  settings: {
    eyebrow: 'Workspace preferences',
    title: 'Settings',
    description: 'Manage your workspace, billing, and sending preferences.',
  },
}

function Sparkline({ points, className }: { points: string; className: string }) {
  return (
    <svg className={`sparkline ${className}`} viewBox="0 0 112 32" role="img" aria-label="Trend increasing">
      <polyline points={points} fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx={points.split(' ').at(-1)?.split(',')[0]} cy={points.split(' ').at(-1)?.split(',')[1]} r="2.5" fill="currentColor" />
    </svg>
  )
}

function KpiCard({ metric }: { metric: (typeof kpis)[number] }) {
  const Icon = metric.icon
  return (
    <article className="kpi-card">
      <div className="kpi-topline">
        <div className={`metric-icon metric-icon-${metric.tone}`}><Icon size={17} strokeWidth={2.2} /></div>
        <span className="kpi-period">Last 30 days <ChevronDown size={13} /></span>
      </div>
      <p className="kpi-label">{metric.label}</p>
      <div className="kpi-value-row">
        <strong>{metric.value}</strong>
        <span className="positive-change"><ArrowUpRight size={13} /> {metric.change}</span>
      </div>
      <div className="kpi-bottom">
        <span>{metric.note}</span>
        <Sparkline points={metric.points} className={metric.spark} />
      </div>
    </article>
  )
}

function DeliveryChart() {
  return (
    <article className="panel chart-panel">
      <div className="panel-heading chart-heading">
        <div>
          <p className="section-kicker">Performance overview</p>
          <h2>Delivery overview</h2>
        </div>
        <div className="chart-controls">
          <div className="legend-list">
            <span><i className="legend-dot legend-dot-coral" /> Delivered</span>
            <span><i className="legend-dot legend-dot-lilac" /> Opened</span>
          </div>
          <button className="select-button">Last 30 days <ChevronDown size={14} /></button>
        </div>
      </div>
      <div className="chart-summary">
        <div><strong>86.4k</strong><span>emails delivered</span></div>
        <div className="chart-summary-change"><ArrowUpRight size={14} /> 8.2% <span>vs. previous period</span></div>
      </div>
      <div className="line-chart-wrap">
        <svg className="line-chart" viewBox="0 0 720 230" preserveAspectRatio="none" aria-label="Email delivery line chart" role="img">
          <defs>
            <linearGradient id="deliveryFill" x1="0" x2="0" y1="0" y2="1">
              <stop offset="0%" stopColor="#ff6b55" stopOpacity=".18" />
              <stop offset="100%" stopColor="#ff6b55" stopOpacity="0" />
            </linearGradient>
            <linearGradient id="openedFill" x1="0" x2="0" y1="0" y2="1">
              <stop offset="0%" stopColor="#a996ed" stopOpacity=".14" />
              <stop offset="100%" stopColor="#a996ed" stopOpacity="0" />
            </linearGradient>
          </defs>
          <line x1="0" y1="18" x2="720" y2="18" className="grid-line" />
          <line x1="0" y1="64" x2="720" y2="64" className="grid-line" />
          <line x1="0" y1="110" x2="720" y2="110" className="grid-line" />
          <line x1="0" y1="156" x2="720" y2="156" className="grid-line" />
          <line x1="0" y1="202" x2="720" y2="202" className="grid-line" />
          <path d="M0 164 C28 153 42 158 67 148 S103 131 125 143 S165 129 182 135 S217 104 241 114 S273 91 301 105 S334 77 360 88 S400 85 424 70 S459 78 484 61 S522 70 545 46 S583 58 602 39 S644 39 667 25 S696 31 720 15 L720 230 L0 230 Z" fill="url(#deliveryFill)" />
          <path d="M0 182 C28 177 45 171 67 175 S101 155 125 167 S160 146 182 157 S215 134 241 145 S271 129 301 137 S333 111 360 124 S396 119 424 111 S459 120 484 100 S516 109 545 90 S576 104 602 80 S643 91 667 70 S700 77 720 61 L720 230 L0 230 Z" fill="url(#openedFill)" />
          <path d="M0 164 C28 153 42 158 67 148 S103 131 125 143 S165 129 182 135 S217 104 241 114 S273 91 301 105 S334 77 360 88 S400 85 424 70 S459 78 484 61 S522 70 545 46 S583 58 602 39 S644 39 667 25 S696 31 720 15" fill="none" className="chart-line chart-line-coral" />
          <path d="M0 182 C28 177 45 171 67 175 S101 155 125 167 S160 146 182 157 S215 134 241 145 S271 129 301 137 S333 111 360 124 S396 119 424 111 S459 120 484 100 S516 109 545 90 S576 104 602 80 S643 91 667 70 S700 77 720 61" fill="none" className="chart-line chart-line-lilac" />
          <circle cx="602" cy="39" r="5" className="chart-point coral-point" />
          <circle cx="602" cy="80" r="4" className="chart-point lilac-point" />
          <line x1="602" y1="20" x2="602" y2="202" className="hover-line" />
          <g className="chart-tooltip" transform="translate(548 0)">
            <rect width="110" height="45" rx="8" />
            <text x="12" y="17">Jun 24, 2024</text>
            <text x="12" y="34" className="tooltip-value">3,842 delivered</text>
          </g>
        </svg>
        <div className="chart-y-axis"><span>5k</span><span>4k</span><span>3k</span><span>2k</span><span>1k</span></div>
      </div>
      <div className="chart-x-axis"><span>Jun 01</span><span>Jun 06</span><span>Jun 12</span><span>Jun 18</span><span>Jun 24</span><span>Jun 30</span></div>
    </article>
  )
}

function AudienceSnapshot() {
  const sources = [
    { label: 'Website forms', amount: '11,940', percentage: '48%', tone: 'coral' },
    { label: 'CSV imports', amount: '7,966', percentage: '32%', tone: 'violet' },
    { label: 'Integrations', amount: '4,985', percentage: '20%', tone: 'blue' },
  ]
  return (
    <article className="panel audience-panel">
      <div className="panel-heading">
        <div>
          <p className="section-kicker">People power your growth</p>
          <h2>Audience snapshot</h2>
        </div>
        <button className="icon-button subtle-button" aria-label="More audience options"><MoreHorizontal size={18} /></button>
      </div>
      <div className="audience-total">
        <div><strong>24,891</strong><span>active subscribers</span></div>
        <span className="positive-change"><ArrowUpRight size={13} /> 8.4%</span>
      </div>
      <div className="audience-progress-label"><span>Subscribers goal</span><strong>75%</strong></div>
      <div className="progress-track"><span style={{ width: '75%' }} /></div>
      <p className="muted-note">You’re 8,109 subscribers away from your next plan tier.</p>
      <div className="source-list">
        {sources.map((source) => (
          <div className="source-row" key={source.label}>
            <span className={`source-icon source-${source.tone}`}><Users size={14} /></span>
            <span className="source-name">{source.label}</span>
            <span className="source-amount">{source.amount}</span>
            <span className="source-percent">{source.percentage}</span>
          </div>
        ))}
      </div>
      <button className="secondary-button full-button" onClick={() => undefined}>Manage audience <ChevronRight size={15} /></button>
    </article>
  )
}

function StatusPill({ status }: { status: CampaignStatus }) {
  const icon = status === 'Sent' ? <CheckCircle2 size={13} /> : status === 'Scheduled' ? <Clock3 size={13} /> : <Pencil size={12} />
  return <span className={`status-pill status-${status.toLowerCase()}`}>{icon}{status}</span>
}

function CampaignRows({ rows, mobile = false }: { rows: Campaign[]; mobile?: boolean }) {
  if (mobile) {
    return (
      <div className="campaign-mobile-list">
        {rows.map((campaign) => (
          <div className="campaign-mobile-card" key={campaign.name}>
            <div className="campaign-mobile-head">
              <div className={`campaign-avatar avatar-${campaign.tone}`}>{campaign.initials}</div>
              <div className="campaign-mobile-title"><strong>{campaign.name}</strong><span>{campaign.description}</span></div>
              <button className="row-action" aria-label={`More options for ${campaign.name}`}><MoreHorizontal size={18} /></button>
            </div>
            <div className="campaign-mobile-meta"><StatusPill status={campaign.status} /><span>{campaign.date}</span></div>
            <div className="campaign-mobile-stats"><div><span>Sent</span><strong>{campaign.sent}</strong></div><div><span>Open rate</span><strong>{campaign.open}</strong></div><div><span>Click rate</span><strong>{campaign.click}</strong></div></div>
          </div>
        ))}
      </div>
    )
  }
  return (
    <div className="campaign-table-wrap">
      <table className="campaign-table">
        <thead><tr><th>Campaign</th><th>Status</th><th>Sent</th><th>Open rate</th><th>Click rate</th><th>Send date</th><th aria-label="Actions" /></tr></thead>
        <tbody>
          {rows.map((campaign) => (
            <tr key={campaign.name}>
              <td><div className="campaign-name-cell"><div className={`campaign-avatar avatar-${campaign.tone}`}>{campaign.initials}</div><div><strong>{campaign.name}</strong><span>{campaign.description}</span></div></div></td>
              <td><StatusPill status={campaign.status} /></td>
              <td className="number-cell">{campaign.sent}</td>
              <td className="number-cell emphatic-cell">{campaign.open}</td>
              <td className="number-cell">{campaign.click}</td>
              <td className="date-cell">{campaign.date}</td>
              <td><button className="row-action" aria-label={`More options for ${campaign.name}`}><MoreHorizontal size={18} /></button></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

function CampaignTable({ compact = false }: { compact?: boolean }) {
  const [tab, setTab] = useState<'All' | CampaignStatus>('All')
  const [query, setQuery] = useState('')
  const filteredRows = useMemo(() => campaigns.filter((campaign) => {
    const matchesTab = tab === 'All' || campaign.status === tab
    const matchesQuery = campaign.name.toLowerCase().includes(query.toLowerCase())
    return matchesTab && matchesQuery
  }), [query, tab])
  const visibleRows = compact ? filteredRows.slice(0, 4) : filteredRows

  return (
    <article className={`panel campaigns-panel ${compact ? 'campaigns-panel-compact' : ''}`}>
      <div className="panel-heading campaigns-heading">
        <div><p className="section-kicker">Make every send count</p><h2>{compact ? 'Recent campaigns' : 'All campaigns'}</h2></div>
        <div className="table-actions">
          <div className="table-search"><Search size={15} /><input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search campaigns" aria-label="Search campaigns" /></div>
          {!compact && <button className="secondary-button filter-button"><Filter size={15} /> Filter</button>}
          <button className="icon-button subtle-button" aria-label="More campaign options"><MoreHorizontal size={18} /></button>
        </div>
      </div>
      <div className="tabs-row">
        {(['All', 'Sent', 'Scheduled', 'Draft'] as const).map((item) => <button key={item} className={`table-tab ${tab === item ? 'active' : ''}`} onClick={() => setTab(item)}>{item}{item === 'All' && <span>12</span>}</button>)}
        {compact && <button className="view-all-button">View all <ArrowUpRight size={14} /></button>}
      </div>
      {visibleRows.length > 0 ? <><CampaignRows rows={visibleRows} /><CampaignRows rows={visibleRows} mobile /></> : <div className="empty-state"><Search size={24} /><strong>No campaigns found</strong><span>Try a different search or filter.</span></div>}
      {!compact && <div className="table-footer"><span>Showing {visibleRows.length} of 12 campaigns</span><div className="pagination"><button disabled aria-label="Previous page"><ChevronRight size={15} className="rotate-180" /></button><button className="current-page">1</button><button>2</button><button>3</button><button aria-label="Next page"><ChevronRight size={15} /></button></div></div>}
    </article>
  )
}

function ActivityFeed() {
  const activity = [
    { icon: Send, tone: 'coral', title: 'June product update was sent', detail: '48,280 recipients · 54.8% opened', time: '2h ago' },
    { icon: UserPlus, tone: 'mint', title: '326 new subscribers joined', detail: 'From your website signup form', time: '5h ago' },
    { icon: ShieldCheck, tone: 'blue', title: 'Domain authentication verified', detail: 'hello@northstar.studio', time: 'Yesterday' },
  ]
  return (
    <article className="panel activity-panel">
      <div className="panel-heading"><div><p className="section-kicker">The latest</p><h2>Recent activity</h2></div><button className="text-button">See all <ArrowUpRight size={14} /></button></div>
      <div className="activity-list">
        {activity.map((item) => { const Icon = item.icon; return <div className="activity-item" key={item.title}><div className={`activity-icon activity-${item.tone}`}><Icon size={16} /></div><div className="activity-copy"><strong>{item.title}</strong><span>{item.detail}</span></div><time>{item.time}</time></div> })}
      </div>
    </article>
  )
}

function QuickInsight() {
  return (
    <article className="insight-card">
      <div className="insight-stars"><Sparkles size={18} /><span>Smart recommendation</span></div>
      <h2>Your audience is ready for more.</h2>
      <p>Tuesday campaigns are getting 24% more clicks than your average. Try scheduling your next send around 10:00 AM.</p>
      <button className="insight-button">Plan a campaign <ArrowUpRight size={15} /></button>
      <div className="insight-orb orb-one" /><div className="insight-orb orb-two" />
    </article>
  )
}

function Overview({ onCreate }: { onCreate: () => void }) {
  return (
    <>
      <section className="kpi-grid">{kpis.map((metric) => <KpiCard key={metric.label} metric={metric} />)}</section>
      <section className="dashboard-grid top-grid"><DeliveryChart /><AudienceSnapshot /></section>
      <CampaignTable compact />
      <section className="dashboard-grid lower-grid"><ActivityFeed /><QuickInsight /></section>
    </>
  )
}

function CampaignsView({ onCreate }: { onCreate: () => void }) {
  return (
    <>
      <section className="kpi-grid campaign-kpi-grid">
        <div className="mini-stat"><span className="mini-stat-icon coral"><Send size={17} /></span><div><span>Total campaigns</span><strong>128</strong><em>+16 this month</em></div></div>
        <div className="mini-stat"><span className="mini-stat-icon mint"><CheckCircle2 size={17} /></span><div><span>Avg. delivery</span><strong>98.7%</strong><em>+0.8% this month</em></div></div>
        <div className="mini-stat"><span className="mini-stat-icon violet"><Clock3 size={17} /></span><div><span>Scheduled next</span><strong>06</strong><em>Next: tomorrow at 9:30 AM</em></div></div>
      </section>
      <CampaignTable />
      <section className="campaign-bottom-grid"><article className="panel send-checklist"><div className="panel-heading"><div><p className="section-kicker">Before you send</p><h2>Campaign checklist</h2></div><ShieldCheck className="checklist-shield" size={22} /></div><div className="checklist-row"><CheckCircle2 size={17} /><span>Sender authentication is active</span><strong>Ready</strong></div><div className="checklist-row"><CheckCircle2 size={17} /><span>List hygiene score is excellent</span><strong>Ready</strong></div><div className="checklist-row"><AlertCircle size={17} /><span>Set a default unsubscribe footer</span><strong className="warning-text">Review</strong></div><button className="secondary-button full-button" onClick={onCreate}>Create campaign <Plus size={15} /></button></article><QuickInsight /></section>
    </>
  )
}

function AudienceView() {
  return (
    <>
      <section className="kpi-grid audience-kpi-grid">
        <div className="mini-stat"><span className="mini-stat-icon coral"><Users size={17} /></span><div><span>Active subscribers</span><strong>24,891</strong><em>+8.4% vs. last month</em></div></div>
        <div className="mini-stat"><span className="mini-stat-icon mint"><UserPlus size={17} /></span><div><span>New this month</span><strong>2,048</strong><em>+22.4% vs. last month</em></div></div>
        <div className="mini-stat"><span className="mini-stat-icon violet"><RefreshCw size={17} /></span><div><span>Growth rate</span><strong>8.4%</strong><em>Healthy audience growth</em></div></div>
      </section>
      <section className="dashboard-grid top-grid"><AudienceSnapshot /><article className="panel source-panel"><div className="panel-heading"><div><p className="section-kicker">Audience health</p><h2>Segments at a glance</h2></div><button className="icon-button subtle-button"><MoreHorizontal size={18} /></button></div><div className="segment-list"><div className="segment-card"><span className="segment-symbol segment-hot"><Zap size={15} /></span><div><strong>Highly engaged</strong><span>Opened in the last 30 days</span></div><b>12,482</b></div><div className="segment-card"><span className="segment-symbol segment-new"><Sparkles size={15} /></span><div><strong>New subscribers</strong><span>Joined in the last 7 days</span></div><b>1,284</b></div><div className="segment-card"><span className="segment-symbol segment-cold"><Clock3 size={15} /></span><div><strong>Needs attention</strong><span>No engagement in 90 days</span></div><b>2,108</b></div></div><button className="secondary-button full-button">Manage segments <ChevronRight size={15} /></button></article></section>
      <article className="panel audience-growth-panel"><div className="panel-heading"><div><p className="section-kicker">Subscriber movement</p><h2>Audience growth</h2></div><button className="select-button">Last 6 months <ChevronDown size={14} /></button></div><div className="growth-bars">{['Jan','Feb','Mar','Apr','May','Jun'].map((month, index) => <div className="growth-column" key={month}><div className="growth-bar-wrap"><div className="growth-bar" style={{ height: `${[38, 50, 43, 67, 78, 94][index]}%` }}><span /></div></div><span>{month}</span></div>)}</div></article>
    </>
  )
}

function AnalyticsView() {
  return (
    <>
      <section className="kpi-grid analytics-kpi-grid">{kpis.slice(1).map((metric) => <KpiCard key={metric.label} metric={metric} />)}<div className="kpi-card analytics-extra"><div className="kpi-topline"><div className="metric-icon metric-icon-gold"><PieChart size={17} /></div><span className="kpi-period">This quarter</span></div><p className="kpi-label">Best performing segment</p><div className="analytics-extra-value"><strong>Power users</strong><span>68.4% open rate</span></div><div className="mini-pill-row"><span>+14.2% engagement</span></div></div></section>
      <DeliveryChart />
      <section className="analytics-bottom-grid"><article className="panel engagement-panel"><div className="panel-heading"><div><p className="section-kicker">Where people read</p><h2>Engagement by device</h2></div></div><div className="device-row"><div className="device-label"><span className="device-icon"><Monitor size={16} /></span><span>Desktop</span></div><strong>62%</strong><div className="device-track"><span style={{ width: '62%' }} /></div></div><div className="device-row"><div className="device-label"><span className="device-icon"><SmartphoneIcon /></span><span>Mobile</span></div><strong>31%</strong><div className="device-track"><span style={{ width: '31%' }} /></div></div><div className="device-row"><div className="device-label"><span className="device-icon"><Globe2 size={16} /></span><span>Other</span></div><strong>7%</strong><div className="device-track"><span style={{ width: '7%' }} /></div></div></article><QuickInsight /></section>
    </>
  )
}

function SmartphoneIcon() {
  return <span className="phone-glyph" aria-hidden="true" />
}

function AutomationsView({ onCreate }: { onCreate: () => void }) {
  const flows = [
    { name: 'New subscriber welcome', trigger: 'When someone joins your audience', people: '8,642 active', status: 'Live', color: 'coral', icon: Mail },
    { name: 'Post-purchase follow up', trigger: 'After a purchase is completed', people: '2,108 active', status: 'Live', color: 'violet', icon: RefreshCw },
    { name: 'Re-engagement sequence', trigger: 'When a subscriber goes cold', people: 'Draft', status: 'Draft', color: 'mint', icon: Zap },
  ]
  return <><div className="section-action-row"><div className="automation-health"><span><i /> 2 journeys live</span><span><Clock3 size={14} /> 1 scheduled</span></div><button className="primary-button" onClick={onCreate}><Plus size={17} /> New automation</button></div><article className="panel automation-panel"><div className="panel-heading"><div><p className="section-kicker">Hands-free engagement</p><h2>Your journeys</h2></div><button className="icon-button subtle-button"><MoreHorizontal size={18} /></button></div><div className="automation-list">{flows.map((flow) => { const Icon = flow.icon; return <div className="automation-row" key={flow.name}><div className={`automation-icon automation-${flow.color}`}><Icon size={18} /></div><div className="automation-copy"><strong>{flow.name}</strong><span>{flow.trigger}</span></div><span className={`automation-status ${flow.status === 'Live' ? 'live' : 'draft'}`}><i /> {flow.status}</span><span className="automation-people">{flow.people}</span><button className="row-action"><MoreHorizontal size={18} /></button></div> })}</div></article><section className="automation-help-grid"><article className="panel automation-template"><div className="template-icon"><Sparkles size={19} /></div><div><h3>Need a place to start?</h3><p>Turn a proven flow into your next automated journey.</p><button className="text-button">Browse automation recipes <ArrowUpRight size={14} /></button></div></article><QuickInsight /></section></>
}

function TemplatesView({ onCreate }: { onCreate: () => void }) {
  const templateCards = [
    { title: 'Product launch', tag: 'Announcement', tone: 'template-coral', graphic: 'launch' },
    { title: 'Weekly newsletter', tag: 'Editorial', tone: 'template-violet', graphic: 'newsletter' },
    { title: 'Welcome email', tag: 'Onboarding', tone: 'template-mint', graphic: 'welcome' },
    { title: 'Summer sale', tag: 'Promotion', tone: 'template-blue', graphic: 'sale' },
  ]
  return <><div className="section-action-row"><div className="template-filters"><button className="filter-chip active">All templates</button><button className="filter-chip">My templates</button><button className="filter-chip">Favorites</button></div><button className="primary-button" onClick={onCreate}><Plus size={17} /> New template</button></div><section className="template-grid">{templateCards.map((template) => <article className="template-card" key={template.title}><div className={`template-preview ${template.tone}`}><div className="preview-bar" /><div className="preview-title" /><div className="preview-image preview-image-${template.graphic}" /><div className="preview-lines"><i /><i /><i /></div><button className="template-preview-action"><Pencil size={14} /> Edit</button></div><div className="template-card-footer"><div><strong>{template.title}</strong><span>{template.tag}</span></div><button className="row-action"><MoreHorizontal size={18} /></button></div></article>)}</section><QuickInsight /></>
}

function IntegrationsView() {
  const integrations = [{ name: 'Shopify', detail: 'Sync customers and purchase events', letters: 'S', tone: 'shopify', connected: true }, { name: 'Webflow', detail: 'Grow your audience from forms', letters: 'W', tone: 'webflow', connected: true }, { name: 'Zapier', detail: 'Connect 6,000+ apps to Sendly', letters: 'Z', tone: 'zapier', connected: false }, { name: 'Google Analytics', detail: 'Measure post-click activity', letters: 'GA', tone: 'google', connected: false }]
  return <><div className="integration-callout"><div className="integration-callout-icon"><Plug size={21} /></div><div><strong>Make your stack work smarter.</strong><span>Connect your everyday tools and keep every customer signal in one place.</span></div><button className="secondary-button">Browse marketplace <ArrowUpRight size={14} /></button></div><section className="integration-grid">{integrations.map((integration) => <article className="panel integration-card" key={integration.name}><div className={`integration-logo integration-logo-${integration.tone}`}>{integration.letters}</div><div className="integration-copy"><h3>{integration.name}</h3><p>{integration.detail}</p><span className={integration.connected ? 'connected-label' : 'not-connected-label'}>{integration.connected ? <><CheckCircle2 size={13} /> Connected</> : 'Not connected'}</span></div><button className={integration.connected ? 'icon-button subtle-button' : 'secondary-button'}>{integration.connected ? <MoreHorizontal size={18} /> : 'Connect'}</button></article>)}</section></>
}

function SettingsView() {
  return <section className="settings-layout"><nav className="settings-nav"><button className="active">Workspace</button><button>Sending & domains</button><button>Notifications</button><button>Billing</button><button>Team members</button></nav><div className="settings-content"><article className="panel settings-card"><div className="panel-heading"><div><p className="section-kicker">Workspace details</p><h2>General settings</h2></div><button className="secondary-button">Save changes</button></div><label className="form-field"><span>Workspace name</span><input defaultValue="Northstar Studio" /></label><label className="form-field"><span>Workspace URL</span><div className="input-with-prefix"><span>sendly.co/</span><input defaultValue="northstar" /></div></label><label className="form-field"><span>Default timezone</span><button className="form-select">(GMT-05:00) Eastern Time <ChevronDown size={15} /></button></label></article><article className="panel sending-health"><div className="health-check"><ShieldCheck size={21} /></div><div><h3>Sending health is excellent</h3><p>Your workspace is ready to reach more people. Domain authentication and list hygiene are both in good standing.</p><button className="text-button">View deliverability report <ArrowUpRight size={14} /></button></div></article></div></section>
}

function ComposerModal({ onClose, onSaved }: { onClose: () => void; onSaved: () => void }) {
  const [step, setStep] = useState(1)
  const [subject, setSubject] = useState('')
  return <div className="modal-backdrop" onMouseDown={onClose}><div className="composer-modal" role="dialog" aria-modal="true" aria-labelledby="composer-title" onMouseDown={(event) => event.stopPropagation()}><div className="modal-header"><div><span className="modal-eyebrow">New campaign</span><h2 id="composer-title">Let’s send something great.</h2></div><button className="modal-close" onClick={onClose} aria-label="Close campaign creator"><X size={20} /></button></div><div className="composer-steps"><div className={step >= 1 ? 'current' : ''}><span>1</span><b>Audience</b></div><i /><div className={step >= 2 ? 'current' : ''}><span>2</span><b>Content</b></div><i /><div className={step >= 3 ? 'current' : ''}><span>3</span><b>Schedule</b></div></div><div className="composer-body">{step === 1 && <div className="composer-step"><div className="composer-step-intro"><div className="composer-step-icon coral-bg"><Users size={21} /></div><div><h3>Who should receive this?</h3><p>Choose an audience or segment for your campaign.</p></div></div><button className="audience-choice selected"><span className="choice-radio"><Check size={12} /></span><span><strong>All active subscribers</strong><small>24,891 people · Recommended</small></span><Users size={18} /></button><button className="audience-choice"><span className="choice-radio" /><span><strong>Highly engaged</strong><small>12,482 people · Opened in the last 30 days</small></span><Zap size={18} /></button><button className="audience-choice"><span className="choice-radio" /><span><strong>Choose a segment</strong><small>Send to a custom audience segment</small></span><ChevronRight size={18} /></button></div>}{step === 2 && <div className="composer-step"><div className="composer-step-intro"><div className="composer-step-icon violet-bg"><Pencil size={21} /></div><div><h3>Shape your message</h3><p>Give your campaign a clear subject and a little personality.</p></div></div><label className="form-field"><span>Campaign name</span><input placeholder="e.g. Summer launch announcement" /></label><label className="form-field"><span>Subject line</span><input value={subject} onChange={(event) => setSubject(event.target.value)} placeholder="Write a subject your audience will love" /></label><label className="form-field"><span>From</span><button className="form-select">Olivia from Northstar Studio <ChevronDown size={15} /></button></label><div className="composer-editor-placeholder"><LayoutTemplate size={21} /><span>Choose a template to start designing your email</span><button className="secondary-button">Browse templates</button></div></div>}{step === 3 && <div className="composer-step"><div className="composer-step-intro"><div className="composer-step-icon mint-bg"><Calendar size={21} /></div><div><h3>Choose when to send</h3><p>Send now or schedule your campaign for the perfect moment.</p></div></div><button className="schedule-choice selected"><span className="choice-radio"><Check size={12} /></span><span><strong>Send immediately</strong><small>Your campaign will begin sending as soon as you publish.</small></span><Send size={18} /></button><button className="schedule-choice"><span className="choice-radio" /><span><strong>Schedule for later</strong><small>Pick a date and time based on your audience’s timezone.</small></span><Calendar size={18} /></button><div className="send-safety-note"><ShieldCheck size={17} /><span>We’ll run a final deliverability check before your send.</span></div></div>}</div><div className="modal-footer"><button className="secondary-button" onClick={() => step === 1 ? onClose() : setStep(step - 1)}>{step === 1 ? 'Cancel' : 'Back'}</button><div><span className="step-count">Step {step} of 3</span><button className="primary-button" onClick={() => step < 3 ? setStep(step + 1) : onSaved()}>{step < 3 ? 'Continue' : 'Save & review'} <ChevronRight size={16} /></button></div></div></div></div>
}

export default function Home() {
  const [activeSection, setActiveSection] = useState<SectionId>('overview')
  const [mobileNavOpen, setMobileNavOpen] = useState(false)
  const [composerOpen, setComposerOpen] = useState(false)
  const [dateOpen, setDateOpen] = useState(false)
  const [dateRange, setDateRange] = useState('Last 30 days')
  const [toast, setToast] = useState('')
  const meta = sectionMeta[activeSection]

  const showToast = (message: string) => {
    setToast(message)
    window.setTimeout(() => setToast(''), 3200)
  }

  const handleSaved = () => {
    setComposerOpen(false)
    showToast('Campaign saved — you can finish it whenever you’re ready.')
  }

  const handleSection = (id: SectionId) => {
    setActiveSection(id)
    setMobileNavOpen(false)
  }

  return (
    <div className="app-shell">
      <aside className={`sidebar ${mobileNavOpen ? 'sidebar-open' : ''}`}>
        <div className="brand-row"><div className="brand-mark"><Mail size={19} strokeWidth={2.5} /></div><span className="brand-name">sendly<span>.</span></span><button className="sidebar-close" onClick={() => setMobileNavOpen(false)} aria-label="Close navigation"><X size={19} /></button></div>
        <button className="workspace-switcher"><span className="workspace-avatar">NS</span><span className="workspace-copy"><strong>Northstar Studio</strong><small>Pro workspace</small></span><ChevronDown size={15} /></button>
        <div className="sidebar-nav">{navGroups.map((group) => <div className="nav-group" key={group.label}><p>{group.label}</p>{group.items.map((item) => { const Icon = item.icon; return <button key={item.id} className={`nav-item ${activeSection === item.id ? 'active' : ''}`} onClick={() => handleSection(item.id)}><Icon size={18} strokeWidth={activeSection === item.id ? 2.35 : 1.9} /><span>{item.label}</span>{item.badge && <em>{item.badge}</em>}</button> })}</div>)}</div>
        <div className="sidebar-bottom"><div className="plan-card"><div className="plan-card-top"><span className="plan-spark"><Zap size={13} fill="currentColor" /></span><span>PRO PLAN</span><MoreHorizontal size={15} /></div><strong>Growing beautifully</strong><div className="plan-progress"><span /></div><div className="plan-meta"><span>24.9k of 50k contacts</span><strong>50%</strong></div><button onClick={() => showToast('Plan details are coming right up.')}>Manage plan <ArrowUpRight size={13} /></button></div><button className="help-link" onClick={() => showToast('Help center opened in a new tab.')}><HelpCircle size={17} /> Help center <ExternalLink size={13} /></button><div className="sidebar-user"><div className="user-avatar">OD<span /></div><div><strong>Olivia Davis</strong><span>Owner</span></div><button aria-label="Open account menu"><MoreHorizontal size={17} /></button></div></div>
      </aside>
      {mobileNavOpen && <button className="sidebar-scrim" onClick={() => setMobileNavOpen(false)} aria-label="Close navigation overlay" />}
      <div className="main-shell">
        <header className="topbar"><div className="topbar-left"><button className="mobile-menu" onClick={() => setMobileNavOpen(true)} aria-label="Open navigation"><Menu size={21} /></button><div className="breadcrumb"><span>Workspace</span><ChevronRight size={14} /><strong>{meta.title}</strong></div></div><div className="topbar-actions"><label className="global-search"><Search size={17} /><input placeholder="Search anything" aria-label="Search anything" /><kbd>⌘ K</kbd></label><button className="topbar-icon" aria-label="Notifications" onClick={() => showToast('You’re all caught up.') }><Bell size={19} /><i /></button><div className="topbar-divider" /><button className="topbar-profile"><span className="topbar-avatar">OD</span><span className="topbar-profile-name">Olivia Davis</span><ChevronDown size={15} /></button></div></header>
        <main className="page-content"><div className="page-heading"><div><div className="heading-eyebrow"><i />{meta.eyebrow}</div><h1>{meta.title}</h1><p>{meta.description}</p></div><div className="heading-actions"><div className="date-picker-wrap"><button className="date-picker" onClick={() => setDateOpen(!dateOpen)}><Calendar size={16} />{dateRange}<ChevronDown size={14} /></button>{dateOpen && <div className="date-menu">{['Last 7 days', 'Last 30 days', 'Last 90 days', 'This year'].map((range) => <button key={range} className={range === dateRange ? 'selected' : ''} onClick={() => { setDateRange(range); setDateOpen(false) }}>{range}{range === dateRange && <Check size={14} />}</button>)}</div>}</div><button className="primary-button create-button" onClick={() => setComposerOpen(true)}><Plus size={17} /> Create campaign</button></div></div>
          {activeSection === 'overview' && <Overview onCreate={() => setComposerOpen(true)} />}
          {activeSection === 'campaigns' && <CampaignsView onCreate={() => setComposerOpen(true)} />}
          {activeSection === 'automations' && <AutomationsView onCreate={() => setComposerOpen(true)} />}
          {activeSection === 'audience' && <AudienceView />}
          {activeSection === 'templates' && <TemplatesView onCreate={() => setComposerOpen(true)} />}
          {activeSection === 'analytics' && <AnalyticsView />}
          {activeSection === 'integrations' && <IntegrationsView />}
          {activeSection === 'settings' && <SettingsView />}
        </main>
        <footer className="app-footer"><span>© 2024 Sendly, Inc.</span><span>All systems operational <i /></span><a href="#">Privacy</a><a href="#">Terms</a></footer>
      </div>
      {composerOpen && <ComposerModal onClose={() => setComposerOpen(false)} onSaved={handleSaved} />}
      {toast && <div className="toast"><CheckCircle2 size={17} /><span>{toast}</span><button onClick={() => setToast('')}><X size={15} /></button></div>}
    </div>
  )
}
