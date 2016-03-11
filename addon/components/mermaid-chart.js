import Ember from 'ember';
import layout from '../templates/components/mermaid-chart';

const { run } = Ember;
const { schedule } = run;

export default Ember.Component.extend({
  layout,
  classNames: ['mermaid'],
  classNameBindings: ['theme'],

  /**
    User provided theme scope

    @property theme
    @returns String
    @public
  */
  theme: null,

  /**
    Config for gantt chart
      titleTopMargin  - margin top for the text over the gantt diagram
      barHeight  - the height of the bars in the graph
      barGap  - the margin between the different activities in the gantt diagram
      topPadding  - margin between title and gantt diagram and between axis and gantt diagram.
      sidePadding  - the space allocated for the section name to the left of the activities.
      gridLineStartPadding  - Vertical starting position of the grid lines
      fontSize  - font size ...
      fontFamily  - font family ...
      numberSectionStyles - the number of alternating section styles

    @property gantt
    @returns Object
    @public
  */
  gantt: {},

  /**
    Config for sequence diagram
      diagramMarginX - margin to the right and left of the sequence diagram
      diagramMarginY  - margin to the over and under the sequence diagram
      actorMargin  - Margin between actors
      width  - Width of actor boxes
      height  - Height of actor boxes
      boxMargin  - Margin around loop boxes
      boxTextMargin  - margin around the text in loop/alt/opt boxes
      noteMargin  - margin around notes
      messageMargin  - Space between messages
      mirrorActors  - mirror actors under diagram
      bottomMarginAdj  - Depending on css styling this might need adjustment.
      Prolongs  the edge of the diagram downwards
      useMaxWidth - when this flag is set the height and width is set to 100% and is then scaling with the available space if not the absolute space required is used

    @property sequenceDiagram
    @returns Object
    @public
  */
  sequenceDiagram: {},

  /**
    Config for flow chart
      htmlLabels - Flag for setting whether or not a html tag should be used for rendering labels on the edges
      useMaxWidth - Flag for setting whether or not a all available width should be used for the diagram.

    @property flowChart
    @returns Object
    @public
  */
  flowChart: {},


  /**
    This options controls whether or not the css rules should be copied into the generated svg

    @property cloneCssStyles
    @returns Bool
    @public
  */
  cloneCssStyles: false,

  /**
    This options controls whether or arrow markers in html code will be absolute pats or an anchor, #. This matters if you are using base tag settings.

    @property arrowMarkerAbsolute
    @returns Bool
    @public
  */
  arrowMarkerAbsolute: false,

  /**
    Mermaid injects some css that could create conflicts, clean it up

    @method _resetCSS
    @private
  */
  _resetCSS() {
    let embedded = this.$().find('[title="mermaid-svg-internal-css"]');
    if (embedded) {
      embedded.text('');
    }
  },

  /**
    Initialize the chart with provided config

    @method _initializeMermaid
    @private
  */
  _initializeMermaid() {
    schedule('afterRender', () => {
      let config = {
        cloneCssStyles: this.get('cloneCssStyles'),
        arrowMarkerAbsolute: this.get('arrowMarkerAbsolute'),
        flowChart: this.get('flowChart'),
        gantt: this.get('gantt'),
        sequenceDiagram: this.get('sequenceDiagram')
      };
      //initialize configuration
      mermaid.initialize(config, this.$());
      //initialize
      mermaid.init(this.$());
      //reset embedded css
      this._resetCSS();
    });
  },

  didInitAttrs() {
    this._initializeMermaid();
  }
});
