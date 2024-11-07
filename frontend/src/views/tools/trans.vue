<template>
    <div>
        <div class="p-5 flex justify-center">
            <a-card title="相对路径转换" class="w-10/12">
                <a-row>
                    <a-col :span="24" flex>
                        <a-flex>
                            <a-input v-model:value="windowRelativePath" placeholder="请输入 windows 相对路径" size="large" />
                            <a-button class="ml-4" type="primary" size="large">转换</a-button>
                        </a-flex>
                    </a-col>
                </a-row>

                <a-row class="mt-5">
                    <a-col :span="24" flex>
                        <a-flex>
                            <a-input v-model:value="linuxRelativePath" placeholder="将转换为 linux 的相对路径" size="large" />
                            <a-button class="ml-4 bg-emerald-400" type="primary" size="large"
                                @click="copyPath">复制</a-button>
                        </a-flex>
                    </a-col>
                </a-row>
            </a-card>
        </div>
    </div>
</template>

<script setup>
import { computed, ref } from "vue"
import { message } from "ant-design-vue"
import { useClipboard } from "@vueuse/core"

const windowRelativePath = ref("")

// 计算属性
const linuxRelativePath = computed(() => {
    return windowRelativePath.value.replaceAll("\\", "\/")
})

const { copy } = useClipboard()

const copyPath = async () => {
    try {
        await copy(linuxRelativePath.value)
        message.success("相对路径已复制到剪贴板")
    } catch (error) {
        message.error("复制失败: ", error)
    }
}
</script>

<style></style>
