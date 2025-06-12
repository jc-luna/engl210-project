//https://developer.mozilla.org/en-US/docs/Web/API/Web_components/Using_templates_and_slots
customElements.define(
	"shared-header",
	class extends HTMLElement {
		constructor() {
			super();
			let template = document.getElementById("shared-hdr");
			let templateContent = template.content;

			const shadowRoot = this.attachShadow({ mode: "open" });
			shadowRoot.appendChild(templateContent.cloneNode(true));
		}
	}
)
