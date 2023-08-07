// editor.js

(function(blocks, editor, components, i18n) {
    const { registerBlockType } = blocks;
    const { TextControl } = components;
    const { __ } = i18n;
  
    registerBlockType('custom/block', {
      title: __('Blockchain Stats', 'blockchain-stats'),
      icon: 'chart-line', // Replace with an appropriate icon
      category: 'common',
      attributes: {
        apiUrl: {
          type: 'string',
          default: 'https://api.example.com/blockchain/stats',
        },
      },
      edit: function(props) {
        const { attributes, setAttributes } = props;
  
        // Update API URL attribute
        const updateApiUrl = newApiUrl => {
          setAttributes({ apiUrl: newApiUrl });
        };
  
        return (
          <div className="blockchain-stats-block-editor">
            <h2>{__('Blockchain Stats Block Settings', 'blockchain-stats')}</h2>
            <TextControl
              label={__('API URL', 'blockchain-stats')}
              value={attributes.apiUrl}
              onChange={updateApiUrl}
            />
          </div>
        );
      },
      save: function() {
        // Rendering in the editor is handled by PHP block-template.php
        return null;
      },
    });
  })(window.wp.blocks, window.wp.editor, window.wp.components, window.wp.i18n);
  