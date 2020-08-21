<template>
  <div class="q-pa-md" style="max-width: 400px">

    <q-form
      
      class="q-gutter-md"
    >
     <q-select
        filled
        v-model="form.category_id"
        :options="options"
        label="Type"
        emit-value
        map-options
      />
      <q-input
        filled
        v-model="form.title"
        label="title *"
        hint="title"
        lazy-rules
        :rules="[ val => val && val.length > 0 || 'Please type title']"
      />

     
        <q-input
        v-model="form.description"
        filled
        autogrow
        label="description"
        hint="description"
        :rules="[
          val => val !== null && val !== '' || 'Please type description',
        ]"
        />
        <q-file
            v-model="form.photo"
            filled
            clearable
            label-color="white"
           
           
            display-value="Upload Photo"
            class="text-center"
            input-class="text-white text-center"
            accept=".jpg, image/*"
            >
            <template v-slot:prepend>
                <q-icon size="1rem" class="text-white" name="fas fa-cloud-upload-alt" />
            </template>
            </q-file>


      <div>
        <q-btn label="Submit" type="submit" color="primary"/>
      </div>
    </q-form>

  </div>
</template>
<script>
export default {
  data () {
    return {
     form:{
          title: null,
          description: null,
          photo: null,
          category_id:null
     },
     model: null,
      options: [
        {
          label: 'Google',
          value: 'goog'
        },
        {
          label: 'Facebook',
          value: 'fb'
        },
        {
          label: 'Twitter',
          value: 'twt'
        },
        {
          label: 'Apple',
          value: 'app'
        },
        {
          label: 'Oracle',
          value: 'ora',
          disable: true
        }
      ]
     
    }
  }
}
</script>