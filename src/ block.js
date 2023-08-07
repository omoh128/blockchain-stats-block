// block.js

(function(blocks, editor, i18n, element) {
    const { registerBlockType } = blocks;
    const { RichText } = editor;
    const { __ } = i18n;
    const { createElement } = element;
  
    registerBlockType('custom/block', {
      title: __('Blockchain Stats', 'blockchain-stats'),
      icon: 'chart-line', // Replace with an appropriate icon
      category: 'common',
      attributes: {
        content: {
          type: 'string',
          default: '',
        },
      },
      edit: function(props) {
        const { attributes, setAttributes } = props;
  
        // Update block content
        const updateContent = newContent => {
          setAttributes({ content: newContent });
        };
  
        return (
          <div className="blockchain-stats-block">
            <RichText
              tagName="div"
              multiline="p"
              value={attributes.content}
              onChange={updateContent}
              placeholder={__('Enter your content here...', 'blockchain-stats')}
            />
          </div>
        );
      },
      save: function(props) {
        return <RichText.Content tagName="div" value={props.attributes.content} />;
      },
    });
  })(window.wp.blocks, window.wp.editor, window.wp.i18n, window.wp.element);
  