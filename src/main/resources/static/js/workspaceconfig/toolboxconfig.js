const toolbox = 
{
  kind: 'categoryToolbox',
  contents: 
  [
    {
      kind: 'category',
      name: 'Loop',
      colour: '#d33e3e',
      contents: 
      [
        {
          kind: 'block',
          type: 'controls_repeat_ext',
        },
        {
          kind: 'block',
          type: 'controls_whileUntil',
        },
        {
          kind: 'block',
          type: 'controls_for',
        },
        {
          kind: 'block',
          type: 'controls_forEach',
        },
        {
          kind: 'block',
          type: 'controls_flow_statements',
        },
      ],
    },

    {
      kind: 'category',
      name: 'Logic',
      colour: '#e77e1c',
      contents:
      [
        {
          kind: 'block',
          type: 'controls_if',
        },
        {
          kind: 'block',
          type: 'logic_compare'
        },
        {
          kind: 'block',
          type: 'logic_operation',
        },
        {
          kind: 'block',
          type: 'logic_negate',
        },
        {
          kind: 'block',
          type: 'logic_boolean',
        },
        {
          kind: 'block',
          type: 'logic_null',
        },
        {
          kind: 'block',
          type: 'logic_ternary',
        },
      ]
    },

    {
      kind: 'category',
      name: 'Math',
      colour: '#cbce3a',
      contents:
      [
        {
          kind: 'block',
          type: 'math_number',
        },
        {
          kind: 'block',
          type: 'math_arithmetic'
        },
        {
          kind: 'block',
          type: 'math_single',
        },
        {
          kind: 'block',
          type: 'math_trig',
        },
        {
          kind: 'block',
          type: 'math_constant',
        },
        {
          kind: 'block',
          type: 'math_number_property',
        },
        {
          kind: 'block',
          type: 'math_round',
        },
        {
          kind: 'block',
          type: 'math_on_list',
        },
        {
          kind: 'block',
          type: 'math_modulo',
        },
        {
          kind: 'block',
          type: 'math_constrain',
        },
        {
          kind: 'block',
          type: 'math_random_int',
        },
        {
          kind: 'block',
          type: 'math_random_float',
        },
        {
          kind: 'block',
          type: 'math_atan2',
        }
      ]
    },

    {
      kind: 'category',
      name: 'Text',
      colour: '#26923e',
      contents:
      [
        {
          kind: 'block',
          type: 'text',
        },
        {
          kind: 'block',
          type: 'text_join'
        },
        {
          kind: 'block',
          type: 'text_append',
        },
        {
          kind: 'block',
          type: 'text_length',
        },
        {
          kind: 'block',
          type: 'text_isEmpty',
        },
        {
          kind: 'block',
          type: 'text_indexOf',
        },
        {
          kind: 'block',
          type: 'text_charAt',
        },
        {
          kind: 'block',
          type: 'text_getSubstring',
        },
        {
          kind: 'block',
          type: 'text_changeCase',
        },
        {
          kind: 'block',
          type: 'text_trim',
        },
        {
          kind: 'block',
          type: 'text_print',
        },
        {
          kind: 'block',
          type: 'text_prompt_ext',
        },
        {
          kind: 'block',
          type: 'text_count',
        },
        {
          kind: 'block',
          type: 'text_replace',
        },
        {
          kind: 'block',
          type: 'text_reverse',
        }
      ]
    },

    {
      kind: 'category',
      name: 'List',
      colour: '#49b1b1',
      contents:
      [
        {
          kind: 'block',
          type: 'lists_create_empty',
        },
        {
          kind: 'block',
          type: 'lists_create_with'
        },
        {
          kind: 'block',
          type: 'lists_repeat',
        },
        {
          kind: 'block',
          type: 'lists_length',
        },
        {
          kind: 'block',
          type: 'lists_isEmpty',
        },
        {
          kind: 'block',
          type: 'lists_indexOf',
        },
        {
          kind: 'block',
          type: 'lists_getIndex',
        },
        {
          kind: 'block',
          type: 'lists_setIndex',
        },
        {
          kind: 'block',
          type: 'lists_getSublist',
        },
        {
          kind: 'block',
          type: 'lists_split',
        },
        {
          kind: 'block',
          type: 'lists_sort',
        },
        {
          kind: 'block',
          type: 'lists_reverse',
        }
      ]
    },
    
    {
      kind: 'category',
      name: 'Variable',
      colour: '#1b6099',
      contents: 
      [
        {
          kind: 'block',
          type: 'variables_get',
        },
        {
          kind: 'block',
          type: 'variables_set',
        },
        {
          kind: 'block',
          type: 'math_change',
        }
      ],
    },

    {
      kind: 'category',
      name: 'Function',
      colour: '#7e42a0',
      contents: 
      [
        {
          kind: 'block',
          type: 'procedures_defnoreturn',
        },
        {
          kind: 'block',
          type: 'procedures_defreturn',
        },
        {
          kind: 'block',
          type: 'procedures_callnoreturn',
        },
        {
          kind: 'block',
          type: 'procedures_callreturn',
        },
        {
          kind: 'block',
          type: 'procedures_ifreturn',
        },
      ],
    }
  ],
};

const workspace = Blockly.inject('blocklyDiv', { toolbox: toolbox, theme: cusomBlocksTheme });



