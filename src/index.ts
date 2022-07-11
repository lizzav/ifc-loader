import { IfcViewerAPI } from "web-ifc-viewer";

const container = document.getElementById("viewer-container");
if (container) {
  const viewer: any = new IfcViewerAPI({ container });
  viewer.axes.setAxes();
  viewer.grid.setGrid();

  const input = document.getElementById("file-input");

  input?.addEventListener(
    "change",

    async (changed) => {
      const file = (changed?.target as any).files?.[0];
      const ifcURL = URL.createObjectURL(file);
      viewer.IFC.loadIfcUrl(ifcURL);
    },

    false
  );
}
