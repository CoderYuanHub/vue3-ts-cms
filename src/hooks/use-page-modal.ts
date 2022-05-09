import { ref } from "vue";
import PageModal from "@/components/page-modal";
type CallbackType = () => void;
export function usePageModal(callback?: CallbackType): any {
  const defaultValue = ref({});
  const pageModalRef = ref<InstanceType<typeof PageModal>>();
  const handleModleList = (val: any) => {
    if (pageModalRef.value) {
      pageModalRef.value.centerDialogVisible = true;
    }
    if (val) {
      defaultValue.value = val;
      callback && callback();
    } else {
      defaultValue.value = {};
    }
  };
  return [defaultValue, pageModalRef, handleModleList];
}
