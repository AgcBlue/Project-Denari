const loopBlocks = new Set(['controls_repeat_ext', 'controls_whileUntil', 'controls_for', 'controls_forEach', 'controls_flow_statements']);

const logicBlocks = new Set(['controls_if', 'logic_compare', 'logic_negate', 'logic_operation', 'logic_boolean', 'logic_null', 'logic_ternary']);

const mathBlocks = new Set(['math_number', 'math_arithmetic', 'math_single', 'math_trig', 'math_constant', 'math_number_property', 'math_round', 'math_on_list', 'math_modulo', 'math_constrain', 'math_random_int', 'math_random_float', 'math_atan2']);

const textBlocks = new Set(['text', 'text_join', 'text_append', 'text_length', 'text_isEmpty', 'text_indexOf', 'text_charAt', 'text_getSubstring', 'text_changeCase', 'text_trim', 'text_print', 'text_prompt_ext', 'text_count',  'text_replace', 'text_reverse']);

const listBlocks = new Set(['lists_create_empty', 'lists_create_with', 'lists_repeat', 'lists_length', 'lists_isEmpty', 'lists_indexOf', 'lists_getIndex', 'lists_setIndex', 'lists_getSublist', 'lists_split', 'lists_sort', 'lists_reverse']);

const variableBlocks = new Set(['variables_get', 'variables_set', 'math_change']);

const functionBlocks = new Set(['procedures_defnoreturn', 'procedures_defreturn', 'procedures_callnoreturn', 'procedures_callreturn', 'procedures_ifreturn']);


