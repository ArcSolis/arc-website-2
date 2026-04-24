import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "./ui/card";

function StoriesSection() {
  return (
    <section className="section section-stories" id="stories">
      <div className="shell">
        <p className="eyebrow center">Selected work</p>
        <h2 className="section-title center">Examples from recent mandates.</h2>

        <div className="card-grid">
          <Card>
            <CardHeader>
              <CardTitle>Gas processing expansion review</CardTitle>
              <CardDescription>Independent review for a gas plant upgrade.</CardDescription>
            </CardHeader>
            <CardContent>
              <p>
                We reviewed process schemes, piping layouts and control
                philosophy then flagged interfaces that threatened schedule and
                uptime.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Offshore tie in concept support</CardTitle>
              <CardDescription>Advisory for an offshore tie in study.</CardDescription>
            </CardHeader>
            <CardContent>
              <p>
                Our team challenged assumptions on routing, access and
                constructability so the client moved forward with confidence.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Terminal automation upgrade</CardTitle>
              <CardDescription>Controls and integration guidance.</CardDescription>
            </CardHeader>
            <CardContent>
              <p>
                We helped define scope, reviewed vendor proposals and guided cut
                over planning for a busy export terminal.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}

export default StoriesSection;
