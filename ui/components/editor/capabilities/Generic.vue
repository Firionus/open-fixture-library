<template>
  <div class="capability-type-data">
    <LabeledInput
      :formstate="formstate"
      :name="`capability${capability.uuid}-comment`"
      label="Comment">
      <PropertyInputText
        v-model="capability.typeData.comment"
        :formstate="formstate"
        :name="`capability${capability.uuid}-comment`"
        :schema-property="properties.definitions.nonEmptyString" />
    </LabeledInput>
  </div>
</template>

<script>
import schemaProperties from '../../../../lib/schema-properties.js';

import LabeledInput from '../../LabeledInput.vue';
import PropertyInputText from '../../PropertyInputText.vue';

export default {
  components: {
    LabeledInput,
    PropertyInputText
  },
  props: {
    capability: {
      type: Object,
      required: true
    },
    formstate: {
      type: Object,
      required: false,
      default: null
    }
  },
  data() {
    return {
      properties: schemaProperties,
      defaultData: {
        comment: ``
      }
    };
  }
};
</script>
