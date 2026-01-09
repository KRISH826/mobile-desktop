
export const SearchPanel = () => {
    return (
        <div className="w-80 bg-card/50 backdrop-blur-xl border-r border-border h-full flex flex-col p-6 gap-8">
            <div className="flex items-center gap-3 text-primary">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z" /></svg>
                <span className="text-2xl font-bold tracking-tight text-foreground">Nexus</span>
            </div>

            <div className="space-y-4">
                <label className="text-xs font-medium text-muted-foreground uppercase tracking-wider">Discovery</label>
                <div className="relative group">
                    <input
                        type="text"
                        placeholder="Search..."
                        className="w-full bg-secondary/50 border border-border rounded-lg pl-10 pr-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all placeholder:text-muted-foreground"
                    />
                    <svg className="absolute left-3 top-3.5 text-muted-foreground group-focus-within:text-foreground transition-colors" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8" /><path d="m21 21-4.3-4.3" /></svg>
                </div>
            </div>

            <div className="space-y-6">
                <div className="space-y-2">
                    <label className="text-xs font-medium text-muted-foreground uppercase tracking-wider">Filters</label>
                    <div className="space-y-1">
                        {['Trending', 'Latest', 'Curated'].map((filter) => (
                            <label key={filter} className="flex items-center gap-3 p-2 rounded-lg hover:bg-secondary/50 cursor-pointer transition-colors group">
                                <div className="w-4 h-4 border border-muted-foreground rounded group-hover:border-primary transition-colors flex items-center justify-center">
                                    <div className="w-2 h-2 bg-primary rounded-sm opacity-0 group-hover:opacity-100 transition-opacity" />
                                </div>
                                <span className="text-sm font-medium text-muted-foreground group-hover:text-foreground transition-colors">{filter}</span>
                            </label>
                        ))}
                    </div>
                </div>
            </div>

            <div className="mt-auto">
                <div className="p-4 rounded-xl bg-gradient-to-br from-primary/10 to-transparent border border-primary/20">
                    <h4 className="text-sm font-semibold text-primary mb-1">Pro Plan</h4>
                    <p className="text-xs text-muted-foreground mb-3">Upgrade for more advanced analytics.</p>
                    <button className="w-full py-2 bg-primary text-primary-foreground text-xs font-bold rounded-lg hover:bg-primary/90 transition-colors shadow-lg shadow-primary/20">
                        Upgrade Now
                    </button>
                </div>
            </div>
        </div>
    );
};
