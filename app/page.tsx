"use client";

import { useEffect, useState } from "react";

// charts
import LineChart from "@/components/charts/LineChart";
import DonutChart from "@/components/charts/DonutChart";
import BarChart from "@/components/charts/BarChart";

// layout
import Section from "@/components/Section";
import StatCard from "@/components/StatCard";
import InsightBox from "@/components/InsightBox";
import FlowStep from "@/components/FlowStep";
import TextBlock from "@/components/TextBlock";
import ChartFrame from "@/components/ChartFrame";

// utils
import { loadCSV } from "@/lib/csv";

export default function Home() {
  const [states, setStates] = useState<any[]>([]);
  const [yearly, setYearly] = useState<any[]>([]);
  const [causes, setCauses] = useState<any[]>([]);
  const [occupation, setOccupation] = useState<any[]>([]);

  useEffect(() => {
    loadCSV("/data/suicides_yearly.csv").then(setYearly);
    loadCSV("/data/causes_distribution.csv").then(setCauses);
    loadCSV("/data/occupation_distribution.csv").then(setOccupation);
    loadCSV("/data/state_distribution.csv").then(setStates);
  }, []);

  return (
    <main>
      {/* ================= HERO ================= */}
      <section className="hero">
        <div className="hero-content">
          <span className="hero-eyebrow">Investigative Report · India</span>

          <h1 className="hero-title">India’s Suicide Crisis</h1>

          <p className="hero-subtitle">
            A decade-long rise hidden in plain sight — shaped by economic
            insecurity, social pressure, and persistent gaps in mental health
            care.
          </p>

          <blockquote className="hero-quote">
            “India now records one suicide every three minutes — the highest
            rate in over five decades.”
          </blockquote>

          <div className="hero-stats">
            <StatCard value="171,000+" label="Deaths in 2022" />
            <StatCard value="+32%" label="Increase since 2017" />
            <StatCard value="73%" label="Male victims" />
          </div>
        </div>
      </section>

      {/* ================= SCALE ================= */}
      <Section title="The Scale of the Crisis">
        <div className="two-col">
          <TextBlock>
            <p>
              Suicide deaths in India have increased steadily over the past
              decade. The rise has consistently outpaced population growth,
              pointing to structural pressures rather than short-term shocks.
            </p>

            <p>
              While the COVID-19 years intensified distress, the upward trend
              continued even after restrictions eased — suggesting deeper,
              unresolved vulnerabilities.
            </p>
          </TextBlock>

          <ChartFrame title="Annual suicide deaths in India (2013–2023)">
            <LineChart
              labels={yearly.map(d => d.year)}
              data={yearly.map(d => d.total_suicides)}
            />
          </ChartFrame>
        </div>

        <InsightBox>
          By 2022, India recorded its highest suicide rate in more than
          five decades, despite economic recovery and expanded helpline access.
        </InsightBox>
      </Section>

      {/* ================= GEOGRAPHY ================= */}
      <Section title="Where the Burden Is Concentrated">
        <div className="two-col">
          <TextBlock>
            <p>
              Suicide deaths are unevenly distributed across India. A small
              group of states accounts for nearly half of all recorded cases,
              while some highly populous states report far lower shares.
            </p>

            <p>
              These disparities reflect differences in urbanization, economic
              stress, and reporting practices — not necessarily differences in
              mental distress itself.
            </p>
          </TextBlock>

          <div className="grid grid-2">
            <InsightBox title="High-burden states">
              Maharashtra, Tamil Nadu, Madhya Pradesh, Karnataka, and West Bengal
              together account for roughly 50% of recorded suicide deaths.
            </InsightBox>

            <InsightBox title="The reporting paradox">
              Uttar Pradesh reports a disproportionately low share relative to
              population size, suggesting under-reporting rather than lower risk.
            </InsightBox>
          </div>
        </div>
      </Section>

      {/* ================= STATES ================= */}
      <Section title="State-Level Concentration">
        <div className="two-col">
          <TextBlock>
            <p>
              Suicide deaths in India are heavily concentrated in a small number of
              states. Economic structure, urbanization, agrarian stress, and reporting
              practices all contribute to this uneven distribution.
            </p>

            <p>
              Five states alone account for nearly half of all recorded suicide deaths,
              underscoring how regional policy, labor markets, and social safety nets
              shape mental health outcomes.
            </p>
          </TextBlock>

          <ChartFrame title="Top states by recorded suicide deaths (2022)">
            <BarChart
              labels={states.map(s => s.state)}
              data={states.map(s => s.total)}
            />
          </ChartFrame>
        </div>

        <div className="grid grid-2">
          <InsightBox title="Concentration risk">
            Maharashtra and Tamil Nadu consistently rank at the top, reflecting
            population size, industrial pressure, agrarian distress, and better
            reporting coverage.
          </InsightBox>

          <InsightBox title="What low numbers may hide">
            States reporting fewer cases may not necessarily face lower distress —
            under-reporting and social stigma remain significant factors.
          </InsightBox>
        </div>
      </Section>


      {/* ================= DEMOGRAPHICS ================= */}
      <Section title="Who Is Most Affected">
        <div className="two-col">
          <ChartFrame title="Suicide distribution by occupation">
            <BarChart
              labels={occupation.map(o => o.occupation)}
              data={occupation.map(o => o.percentage)}
            />
          </ChartFrame>

          <TextBlock>
            <p>
              Daily-wage laborers represent the single largest occupational group
              among suicide victims. Farmers and agricultural workers also carry
              a disproportionate burden.
            </p>

            <p>
              These patterns underscore the mental health impact of income
              instability, debt exposure, and limited social protection.
            </p>
          </TextBlock>
        </div>

        <div className="grid grid-2">
          <InsightBox title="Gender imbalance">
            Approximately 73% of recorded suicide deaths are among men, reflecting
            economic pressure and social expectations tied to earning roles.
          </InsightBox>

          <InsightBox title="Women and domestic isolation">
            More than half of female suicide deaths are among housewives,
            highlighting the mental health impact of domestic isolation and
            relationship stress.
          </InsightBox>
        </div>
      </Section>

      {/* ================= FACTORS ================= */}
      <Section title="Circumstances Associated with Suicide">
        <div className="two-col">
          <TextBlock>
            <p>
              Official records most frequently cite family conflict and illness
              as associated circumstances. Financial stress, academic pressure,
              and substance use also appear repeatedly.
            </p>

            <p>
              These classifications reflect administrative reporting rather than
              clinical diagnosis and likely understate mental health conditions.
            </p>
          </TextBlock>

          <ChartFrame title="Reported circumstances in suicide cases">
            <DonutChart
              labels={causes.map(c => c.cause)}
              data={causes.map(c => c.percentage)}
            />
          </ChartFrame>
        </div>
      </Section>

      {/* ================= POLICY ================= */}
      <Section title="Policy Response and Its Limits">
        <TextBlock>
          <p>
            India decriminalized attempted suicide in 2017 and launched its first
            National Suicide Prevention Strategy in 2022. Tele-MANAS has expanded
            crisis helpline access nationwide.
          </p>

          <p>
            Despite these efforts, suicide deaths have continued to rise —
            exposing gaps between crisis response, long-term care, and
            prevention.
          </p>
        </TextBlock>

        <InsightBox>
          Experts estimate that between 70–90% of people with mental health
          conditions in India receive no formal treatment.
        </InsightBox>
      </Section>

      {/* ================= PRESSURE CYCLE ================= */}
      <Section title="A Repeating Pattern of Pressure">
        <div className="grid grid-3">
          <FlowStep
            icon="🏠"
            title="Social & Economic Pressure"
            text="Income instability, debt, family expectations, academic competition."
          />
          <FlowStep
            icon="🧠"
            title="Psychological Strain"
            text="Anxiety, depression, isolation, and limited coping support."
          />
          <FlowStep
            icon="🚨"
            title="Crisis Without Care"
            text="Delayed access to timely, sustained mental health intervention."
          />
        </div>
      </Section>

      {/* ================= SOURCES ================= */}
      <Section title="Sources & Methodology">
        <div className="two-col">
          <TextBlock>
            <p>
              This investigation synthesizes official government data, public
              health research, and long-form journalism to examine suicide trends
              in India from 2013 to 2023.
            </p>

            <p>
              Suicide figures are based primarily on the National Crime Records
              Bureau’s <em>Accidental Deaths & Suicides in India</em> reports.
              Reporting limitations and undercounting are acknowledged.
            </p>
          </TextBlock>

          <ul className="source-list">
            <li>National Crime Records Bureau (NCRB)</li>
            <li>Ministry of Health & Family Welfare</li>
            <li>Press Information Bureau</li>
            <li>WHO Mental Health Reports</li>
            <li>NIMHANS & Lancet Psychiatry</li>
            <li>IndiaSpend & Times of India investigations</li>
          </ul>
        </div>
      </Section>

      {/* ================= FOOTER ================= */}
      <footer className="footer">
        <p>
          If you or someone you know is in distress, help is available via{" "}
          <strong>Tele-MANAS (14416)</strong>
        </p>
        <p>Public health reporting · Updated 2025</p>
      </footer>
    </main>
  );
}
