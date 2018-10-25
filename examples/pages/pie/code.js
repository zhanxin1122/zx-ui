export const codeNormal1 = `<hd-pie title="饼图分析1"
                :values="['状态一', '状态二', '状态三']"
                :data="[{ value: 15, name: '状态一' }, { value: 70, name: '状态二' }, { value: 15, name: '状态三' }]"
                :radius="['0', '65%']"
                :showItemLabel="true"
                loading/>`;

export const codeNormal2 = `<hd-pie title="饼图分析2"
                :values="['状态一', '状态二', '状态三', '状态四']"
                :data="[
                  { value: 20, name: '状态一' },
                  { value: 60, name: '状态二' },
                  { value: 4, name: '状态三' },
                  { value: 16, name: '状态四' }
                ]"
                :radius="['40%', '65%']"
                :showItemLabel="true"
                loading/>`;

export const codeNormal3 = `<hd-pie title="南丁格尔玫瑰图"
                :values="['状态一', '状态二', '状态三', '状态四', '状态五', '状态六']"
                :data="[
                  { value: 100, name: '状态一' },
                  { value: 50, name: '状态二' },
                  { value: 25, name: '状态三' },
                  { value: 20, name: '状态四' },
                  { value: 15, name: '状态五' },
                  { value: 10, name: '状态六' }
                ]"
                :radius="['0', '65%']"
                :roseType="'radius'"
                loading/>`;
