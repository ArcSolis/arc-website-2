import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "./ui/card";

function UseCasesSection() {
  return (
    <section className="section section-use-cases">
      <div className="shell">
        <p className="eyebrow center">Where we help most</p>
        <h2 className="section-title center">
          Typical consulting briefs for ArcSolis.
        </h2>

        <div className="use-case-grid">
          <Card>
            <CardHeader>
              <CardTitle>Concept and feasibility reviews</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Bring a second set of eyes to early studies before major spend.
              </CardDescription>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>FEED and detailed design support</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Review deliverables, comment logs and discipline interfaces.
              </CardDescription>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Brownfield modifications</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Check tie ins, shutdown windows and construction methods.
              </CardDescription>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Vendor and EPC selection</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Support scope definition and technical bid evaluation.
              </CardDescription>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Project recovery exercises</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Diagnose slippage, propose quick actions and focus on value.
              </CardDescription>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Operations and handover support</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Smooth the path from construction to stable operations.
              </CardDescription>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}

export default UseCasesSection;
