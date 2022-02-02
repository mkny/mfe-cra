// @ts-nocheck
import { lazy, Suspense } from "react";

const App1 = lazy(() => import("app1/Appname"));
const App2 = lazy(() => import("app2/Appname"));

function App() {
  return (
    <div>
      <h3>Container</h3>

      <Suspense fallback={<p>Loading container</p>}>
          <App1 />

          <div
            style={{
              border: "1px solid blue",
              padding: 10,
            }}
          >
            <App2 />
          </div>
        </Suspense>
    </div>
  );
}

export default App;
