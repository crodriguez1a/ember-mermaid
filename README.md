# Ember-mermaid

An ember addon for Mermaid by [https://github.com/knsv](knsv)


## Installation

     
     ember install ember-mermaid
     
     
##Documentation

- Ember Mermaid: <http://demos.evolutionaryapps.com/EmberMermaid>
- Mermaid: <http://knsv.github.io/mermaid/>


##Example

	{{#mermaid-chart}}
      graph LR
        A[Hard edge] -->|Link text| B(Round edge)
        B --> C{Decision}
        C -->|One| D[Result one]
        C -->|Two| E[Result two]
	{{/mermaid-chart}}
	

