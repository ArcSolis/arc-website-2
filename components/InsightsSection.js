import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "./ui/card";

function InsightsSection() {
  return (
    <section className="section section-insights" id="insights">
      <div className="shell">
        <p className="eyebrow center">Insights and resources</p>
        <h2 className="section-title center">
          Short notes from project work.
        </h2>
        <div className="card-grid insights-grid">
          <Card>
            <CardHeader>
              <CardTitle>Stage gate reviews that help</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                A simple checklist for making stage gate meetings useful for
                project leaders.
              </CardDescription>
              <a href="#contact" className="insight-link">
                Request the checklist
              </a>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Working with brownfield constraints</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Practical patterns for changes on live plants without surprise
                downtime.
              </CardDescription>
              <a href="#contact" className="insight-link">
                Speak with an advisor
              </a>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Independent reviews with clear output</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                How we structure findings so your team moves from insight to
                action quickly.
              </CardDescription>
              <a href="#contact" className="insight-link">
                See a sample pack
              </a>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}

export default InsightsSection;
