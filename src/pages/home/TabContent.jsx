import { useState, useRef, useEffect } from 'react';
import dataEnrich from "/data-enrichment.png";
import dataSync from "/data-sync.png";
import bulkExport from "/bulk-export.png";
import brain from "/brain.png";
import chevron from "/green-angle-right.png";
import enrich1 from "/tabs/prospects700m.png";
import enrich2 from "/tabs/capture-every-lead.webp";
import sync1 from "/tabs/instant-data-sync.png";
import sync2 from "/tabs/instant-CRM-insights.png";
import bulk1 from "/tabs/export-profiles.png";
import bulk2 from "/tabs/export-gsheet.png";
import ai1 from "/tabs/high-impact.webp";
import ai2 from "/tabs/use-shortcuts.webp";


import { Link } from 'react-router-dom';

const TabComponent = () => {
    const [activeTab, setActiveTab] = useState(0);
    const [underlineStyle, setUnderlineStyle] = useState({});
    const tabsRef = useRef([]);

    const tabs = [
        {
            id: 'enrichment',
            label: {
                icon: dataEnrich,
                text: 'CRM Data Enrichment',
            },
            content: (
                <div className="enrichment-content">
                    <p>It’s hard to find the accurate contact data for every prospects by <span>Incomplete Data</span></p>
                    <div className='cards'>
                        <div className='col'>
                            <p>Here is how <span>LeadCRM tackles</span> that situation.</p>
                            <Link>Try LeadCRM Data Enrichment <img src={chevron} alt="arrow icon" /></Link>
                            <div>
                                <img src={enrich1} alt="LeadCRM Data Enrichment" />
                            </div>
                        </div>
                        <div className='col'>
                            <p>If it does not works for you !</p>
                            <Link>Try Our Advanced Waterfall Enrichment <img src={chevron} alt="arrow icon" /></Link>
                            <div>
                                <img src={enrich2} alt="LeadCRM Data Enrichment" />
                            </div>
                        </div>
                    </div>
                </div>
            )
        },
        {
            id: 'sync',
            label: {
                icon: dataSync,
                text: 'CRM Data Sync',
            },
            content: (
                <div className="sync-content">
                    <p>40+ hours lost to copy-paste. Every. Single. Month.. <span>Lost Lead Context</span></p>
                    <div className='cards'>
                        <div className='col'>
                            <p>The Solution? LeadCRM's Instant Data Sync.</p>
                            <Link>Try LeadCRM Data Sync <img src={chevron} alt="arrow icon" /></Link>
                            <div>
                                <img src={sync1} alt="LeadCRM Data Enrichment" />
                            </div>
                        </div>
                        <div className='col'>
                            <p>Unlock instant CRM insights on every profile you visit.</p>
                            <Link>Try LeadCRM Data Overlay <img src={chevron} alt="arrow icon" /></Link>
                            <div>
                                <img src={sync2} alt="LeadCRM Data Enrichment" />
                            </div>
                        </div>
                    </div>
                </div>
            )
        },
        {
            id: 'bulk',
            label: {
                icon: bulkExport,
                text: 'Bulk Export & Enrichment',
            },
            content: (
                <div className="bulk-content">
                    <p>Your Sales Navigator Workflow is Broken. <span>Lost Productivity</span></p>
                    <div className='cards'>
                        <div className='col'>
                            <p>Enrich & Export 250 Profiles in Just 60 Seconds.</p>
                            <Link>Try LeadCRM Bulk Export <img src={chevron} alt="arrow icon" /></Link>
                            <div>
                                <img src={bulk1} alt="LeadCRM Data Enrichment" />
                            </div>
                        </div>
                        <div className='col'>
                            <p>Export & enrich profiles to the CRM or G-Sheet</p>
                            <Link>Try LeadCRM Bulk Export <img src={chevron} alt="arrow icon" /></Link>
                            <div>
                                <img src={bulk2} alt="LeadCRM Data Enrichment" />
                            </div>
                        </div>
                    </div>
                </div>
            )
        },
        {
            id: 'productivity',
            label: {
                icon: brain,
                text: 'AI Productivity',
            },
            content: (
                <div className="ai-content">
                    <p>Your Most Valuable LinkedIn Activity is Also Your Biggest Time Sink. <span>No Smart Assistance</span></p>
                    <div className='cards'>
                        <div className='col'>
                            <p>Get the same high-impact engagement in 80% less time.</p>
                            <Link>Try LeadCRM AI Response <img src={chevron} alt="arrow icon" /></Link>
                            <div>
                                <img src={ai1} alt="LeadCRM Data Enrichment" />
                            </div>
                        </div>
                        <div className='col'>
                            <p>Use Shortcuts to reply faster.</p>
                            <Link>Try LeadCRM Templates <img src={chevron} alt="arrow icon" /></Link>
                            <div>
                                <img src={ai2} alt="LeadCRM Data Enrichment" />
                            </div>
                        </div>
                    </div>
                </div>
            )
        }
    ];

    useEffect(() => {
        const updateUnderline = () => {
            const activeTabElement = tabsRef.current[activeTab];
            if (activeTabElement) {
                const { offsetLeft, offsetWidth } = activeTabElement;
                setUnderlineStyle({
                    left: offsetLeft,
                    width: offsetWidth,
                });
            }
        };

        // Run once immediately (on mount or when activeTab changes)
        updateUnderline();

        // Listen for window resize
        window.addEventListener('resize', updateUnderline);

        // Cleanup
        return () => window.removeEventListener('resize', updateUnderline);
    }, [activeTab]);


    const handleTabClick = (index) => {
        setActiveTab(index);
    };

    return (
        <section className="tabs-container">
            <div className="site-width">
                <h2>Complete LinkedIn Sales Solutions</h2>
                <p>Everything you need for professional LinkedIn prospecting</p>

                <div className="tab-navigation">
                    <div className="tab-nav">
                        {tabs.map((tab, index) => (
                            <button
                                key={tab.id}
                                ref={(el) => (tabsRef.current[index] = el)}
                                onClick={() => handleTabClick(index)}
                                className={`tab-button ${activeTab === index ? 'active' : ''}`}
                                id='hello'
                            >
                                <img src={tab.label.icon} className="tab-icon" />
                                <span className="tab-text">{tab.label.text}</span>
                            </button>
                        ))}
                        <div
                            className="underline"
                            style={{
                                left: `${underlineStyle.left}px`,
                                width: `${underlineStyle.width}px`,
                            }}
                        />
                    </div>
                </div>

                <div className="tab-content">
                    {tabs[activeTab].content}
                </div>
            </div>
        </section>
    );
};

export default TabComponent;