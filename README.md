# Ember-mermaid

An ember addon for Mermaid by [https://github.com/knsv](knsv)


## Installation

     
     ember install ember-mermaid
     
     
##Documentation

- Addon: <http://demos.evolutionaryapps.com/EmberMermaid>
- Source: <http://knsv.github.io/mermaid/>


##Example

	{{#mermaid-chart}}
      graph LR
        A[Hard edge] -->|Link text| B(Round edge)
          B --> C{Decision}
          C -->|One| D[Result one]
          C -->|Two| E[Result two]
	{{/mermaid-chart}}
	

##Configuration

<http://demos.evolutionaryapps.com/EmberMermaid/configuration>

##Theming
<http://demos.evolutionaryapps.com/EmberMermaid/theming>
