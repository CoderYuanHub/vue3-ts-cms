import { ref } from "vue";
import PageContent from "@/components/page-content/src/page-content.vue";
export function usePageSearch(): any {
  const pageContentRef = ref<InstanceType<typeof PageContent>>();
  const handleSearch = (val: any) => {
    pageContentRef.value?.getTableList(val);
  };
  const handleReset = () => {
    pageContentRef.value?.getTableList();
  };
  return [pageContentRef, handleSearch, handleReset];
}
