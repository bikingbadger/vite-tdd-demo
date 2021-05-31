import { mount } from '@vue/test-utils';
import FormSubmitter from '../components/FormSubmitter.vue';

describe('FormSubmitter', () => {
  it('reveals a notification when submitted', async () => {
    const wrapper = mount(FormSubmitter);

    await wrapper.find('[data-username]').setValue('hilton');
    await wrapper.vm.$nextTick();
    await wrapper.find('form').trigger('submit.prevent');
    await wrapper.vm.$nextTick();

    expect(wrapper.find('.message').text()).toBe(
      'Thank you for your submission, hilton',
    );
  });
});
