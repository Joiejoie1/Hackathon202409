// copied from: https://github.com/mlc-ai/web-llm/blob/main/examples/simple-chat/src/gh-config.js
export const modelVersion = "v0_2_30";
export const modelLibURLPrefix =
	"https://raw.githubusercontent.com/mlc-ai/binary-mlc-llm-libs/main/web-llm-models/";

export const modelConfig = {
	model_list: [
	// Models with _1-1k at the end of the local_id fit for 128MB buffer limit (e.g. webgpu on Android)
		// Llama-3
		{
			"model_url": "https://raw.githubusercontent.com/mlc-ai/binary-mlc-llm-libs/main/web-llm-models/v0_2_30/Llama-3-8B-Instruct-q4f32_1-ctx1k_cs1k-webgpu.wasm",
			"model_id": "Llama-3-8B-Instruct-q4f32_1",
			"model_lib_url": "https://raw.githubusercontent.com/mlc-ai/binary-mlc-llm-libs/main/web-llm-models/v0_2_30/Llama-3-8B-Instruct-q4f32_1-ctx1k_cs1k-webgpu.wasm",
			"vram_required_MB": 6101.01,
			"low_resource_required": false,
		},
		{
			"model_url": "https://huggingface.co/mlc-ai/Llama-3-8B-Instruct-q4f16_1-MLC/resolve/main/",
			"model_id": "Llama-3-8B-Instruct-q4f16_1",
			"model_lib_url": modelLibURLPrefix + modelVersion + "/Llama-3-8B-Instruct-q4f16_1-ctx4k_cs1k-webgpu.wasm",
			"vram_required_MB": 5001.00,
			"low_resource_required": false,
		},
		{
			"model_url": "https://huggingface.co/mlc-ai/Llama-3-8B-Instruct-q4f32_1-MLC/resolve/main/",
			"model_id": "Llama-3-8B-Instruct-q4f32_1-1k",
			"model_lib_url": modelLibURLPrefix + modelVersion + "/Llama-3-8B-Instruct-q4f32_1-ctx1k_cs1k-webgpu.wasm",
			"vram_required_MB": 5295.70,
			"low_resource_required": true,
		},
		{
			"model_url": "https://huggingface.co/mlc-ai/Llama-3-8B-Instruct-q4f16_1-MLC/resolve/main/",
			"model_id": "Llama-3-8B-Instruct-q4f16_1-1k",
			"model_lib_url": modelLibURLPrefix + modelVersion + "/Llama-3-8B-Instruct-q4f16_1-ctx1k_cs1k-webgpu.wasm",
			"vram_required_MB": 4598.34,
			"low_resource_required": true,
		},
		{
			"model_url": "https://huggingface.co/mlc-ai/Llama-3-70B-Instruct-q3f16_1-MLC/resolve/main/",
			"model_id": "Llama-3-70B-Instruct-q3f16_1",
			"model_lib_url": modelLibURLPrefix + modelVersion + "/Llama-3-70B-Instruct-q3f16_1-ctx4k_cs1k-webgpu.wasm",
			"vram_required_MB": 31153.13,
			"low_resource_required": false,
		},
		// Llama-2
		{
			"model_url": "https://huggingface.co/mlc-ai/Llama-2-7b-chat-hf-q4f32_1-MLC/resolve/main/",
			"local_id": "Llama-2-7b-chat-hf-q4f32_1",
			"model_lib_url": "https://raw.githubusercontent.com/mlc-ai/binary-mlc-llm-libs/main/Llama-2-7b-chat-hf/Llama-2-7b-chat-hf-q4f32_1-ctx4k_cs1k-webgpu.wasm",
			"vram_required_MB": 9109.03,
			"low_resource_required": false,
		},
		{
			"model_url": "https://huggingface.co/mlc-ai/Llama-2-7b-chat-hf-q4f16_1-MLC/resolve/main/",
			"local_id": "Llama-2-7b-chat-hf-q4f16_1",
			"model_lib_url": "https://raw.githubusercontent.com/mlc-ai/binary-mlc-llm-libs/main/Llama-2-7b-chat-hf/Llama-2-7b-chat-hf-q4f16_1-ctx4k_cs1k-webgpu.wasm",
			"vram_required_MB": 6749.02,
			"low_resource_required": false,
			"required_features": ["shader-f16"],
		},
		{
			"model_url": "https://huggingface.co/mlc-ai/Llama-2-7b-chat-hf-q4f16_1-MLC/resolve/main/",
			"local_id": "Llama-2-7b-chat-hf-q4f16_1-1k",
			"model_lib_url": "https://raw.githubusercontent.com/mlc-ai/binary-mlc-llm-libs/main/Llama-2-7b-chat-hf/Llama-2-7b-chat-hf-q4f16_1-ctx1k-webgpu.wasm",
			"vram_required_MB": 4618.52,
			"low_resource_required": false,
			"required_features": ["shader-f16"],
		},
		{
			"model_url": "https://huggingface.co/mlc-ai/Llama-2-13b-chat-hf-q4f16_1-MLC/resolve/main/",
			"local_id": "Llama-2-13b-chat-hf-q4f16_1",
			"model_lib_url": "https://raw.githubusercontent.com/mlc-ai/binary-mlc-llm-libs/main/Llama-2-13b-chat-hf/Llama-2-13b-chat-hf-q4f16_1-ctx4k_cs1k-webgpu.wasm",
			"vram_required_MB": 11814.09,
			"low_resource_required": false,
			"required_features": ["shader-f16"],
		},
		/* {
			"model_url": "https://huggingface.co/mlc-ai/mlc-chat-Llama-2-13b-chat-hf-q4f32_1/resolve/main/",
			"local_id": "Llama-2-13b-chat-hf-q4f32_1",
			"model_lib_url": "https://raw.githubusercontent.com/mlc-ai/binary-mlc-llm-libs/main/Llama-2-13b-chat-hf-q4f32_1-webgpu.wasm",
			"vram_required_MB": 16814.09,
			"low_resource_required": false,
		}, */
		{
			"model_url": "https://huggingface.co/mlc-ai/Llama-2-70b-chat-hf-q4f16_1-MLC/resolve/main/",
			"local_id": "Llama-2-70b-chat-hf-q4f16_1",
			"model_lib_url": "https://raw.githubusercontent.com/mlc-ai/binary-mlc-llm-libs/main/Llama-2-70b-chat-hf/Llama-2-70b-chat-hf-q4f16_1-ctx4k_cs1k-webgpu.wasm",
			"vram_required_MB": 43729.05,
			"low_resource_required": false,
			"required_features": ["shader-f16"],
		},
		// Mistral variants
		{
			"model_url": "https://huggingface.co/mlc-ai/WizardMath-7B-V1.1-q4f16_1-MLC/resolve/main/",
			"local_id": "WizardMath-7B-V1.1-q4f16_1",
			"model_lib_url": "https://raw.githubusercontent.com/mlc-ai/binary-mlc-llm-libs/main/Mistral-7B-Instruct-v0.2/Mistral-7B-Instruct-v0.2-q4f16_1-sw4k_cs1k-webgpu.wasm",
			"vram_required_MB": 6079.02,
			"low_resource_required": false,
			"required_features": ["shader-f16"],
		},
		{
			"model_url": "https://huggingface.co/mlc-ai/Mistral-7B-Instruct-v0.2-q4f16_1-MLC/resolve/main/",
			"local_id": "Mistral-7B-Instruct-v0.2-q4f16_1",
			"model_lib_url": "https://raw.githubusercontent.com/mlc-ai/binary-mlc-llm-libs/main/Mistral-7B-Instruct-v0.2/Mistral-7B-Instruct-v0.2-q4f16_1-sw4k_cs1k-webgpu.wasm",
			"vram_required_MB": 6079.02,
			"low_resource_required": false,
			"required_features": ["shader-f16"],
		},
		{
			"model_url": "https://huggingface.co/mlc-ai/OpenHermes-2.5-Mistral-7B-q4f16_1-MLC/resolve/main/",
			"local_id": "OpenHermes-2.5-Mistral-7B-q4f16_1",
			"model_lib_url": "https://raw.githubusercontent.com/mlc-ai/binary-mlc-llm-libs/main/Mistral-7B-Instruct-v0.2/Mistral-7B-Instruct-v0.2-q4f16_1-sw4k_cs1k-webgpu.wasm",
			"vram_required_MB": 6079.02,
			"low_resource_required": false,
			"required_features": ["shader-f16"],
		},
		{
			"model_url": "https://huggingface.co/mlc-ai/NeuralHermes-2.5-Mistral-7B-q4f16_1-MLC/resolve/main/",
			"local_id": "NeuralHermes-2.5-Mistral-7B-q4f16_1",
			"model_lib_url": "https://raw.githubusercontent.com/mlc-ai/binary-mlc-llm-libs/main/Mistral-7B-Instruct-v0.2/Mistral-7B-Instruct-v0.2-q4f16_1-sw4k_cs1k-webgpu.wasm",
			"vram_required_MB": 6079.02,
			"low_resource_required": false,
			"required_features": ["shader-f16"],
		},
		/* {
			"model_url": "https://huggingface.co/mlc-ai/mlc-chat-Mistral-7B-Instruct-v0.1-q4f32_1/resolve/main/",
			"local_id": "Mistral-7B-Instruct-v0.1-q4f32_1",
			"model_lib_url": "https://raw.githubusercontent.com/mlc-ai/binary-mlc-llm-libs/main/Mistral-7B-Instruct-v0.1-q4f32_1-sw4k_cs1k-webgpu.wasm",
			"vram_required_MB": 7079.02,
			"low_resource_required": false,
		}, */
		/* {
			"model_url": "https://huggingface.co/mlc-ai/mlc-chat-WizardCoder-15B-V1.0-q4f32_1/resolve/main/",
			"local_id": "WizardCoder-15B-V1.0-q4f32_1",
			"model_lib_url": "https://raw.githubusercontent.com/mlc-ai/binary-mlc-llm-libs/main/WizardCoder-15B-V1.0-q4f32_1-webgpu.wasm",
			"vram_required_MB": 9079.02,
			"low_resource_required": false,
		}, */
		// Gemma-2B
		{
			"model_url": "https://huggingface.co/mlc-ai/gemma-2b-it-q4f16_1-MLC/resolve/main/",
			"local_id": "gemma-2b-it-q4f16_1",
			"model_lib_url": "https://raw.githubusercontent.com/mlc-ai/binary-mlc-llm-libs/main/gemma-2b-it/gemma-2b-it-q4f16_1-ctx4k_cs1k-webgpu.wasm",
			"vram_required_MB": 1476.52,
			"low_resource_required": false,
			"buffer_size_required_bytes": 262144000,
			"required_features": ["shader-f16"],
		},
		{
			"model_url": "https://huggingface.co/mlc-ai/gemma-2b-it-q4f32_1-MLC/resolve/main/",
			"local_id": "gemma-2b-it-q4f32_1",
			"model_lib_url": "https://raw.githubusercontent.com/mlc-ai/binary-mlc-llm-libs/main/gemma-2b-it/gemma-2b-it-q4f32_1-ctx4k_cs1k-webgpu.wasm",
			"vram_required_MB": 1750.66,
			"low_resource_required": false,
			"buffer_size_required_bytes": 262144000,
		},
		{
			"model_url": "https://huggingface.co/mlc-ai/gemma-2b-it-q4f16_1-MLC/resolve/main/",
			"local_id": "gemma-2b-it-q4f16_1-1k",
			"model_lib_url": "https://raw.githubusercontent.com/mlc-ai/binary-mlc-llm-libs/main/gemma-2b-it/gemma-2b-it-q4f16_1-ctx1k_cs1k-webgpu.wasm",
			"vram_required_MB": 1476.52,
			"low_resource_required": true,
			"buffer_size_required_bytes": 262144000,
			"required_features": ["shader-f16"],
		},
		{
			"model_url": "https://huggingface.co/mlc-ai/gemma-2b-it-q4f32_1-MLC/resolve/main/",
			"local_id": "gemma-2b-it-q4f32_1-1k",
			"model_lib_url": "https://raw.githubusercontent.com/mlc-ai/binary-mlc-llm-libs/main/gemma-2b-it/gemma-2b-it-q4f32_1-ctx1k_cs1k-webgpu.wasm",
			"vram_required_MB": 1750.66,
			"low_resource_required": true,
			"buffer_size_required_bytes": 262144000,
		},
		// RedPajama
		{
			"model_url": "https://huggingface.co/mlc-ai/RedPajama-INCITE-Chat-3B-v1-q4f16_1-MLC/resolve/main/",
			"local_id": "RedPajama-INCITE-Chat-3B-v1-q4f16_1",
			"model_lib_url": "https://raw.githubusercontent.com/mlc-ai/binary-mlc-llm-libs/main/RedPajama-INCITE-Chat-3B-v1/RedPajama-INCITE-Chat-3B-v1-q4f16_1-ctx2k-webgpu.wasm",
			"vram_required_MB": 2972.09,
			"low_resource_required": false,
			"required_features": ["shader-f16"],
		},
		{
			"model_url": "https://huggingface.co/mlc-ai/RedPajama-INCITE-Chat-3B-v1-q4f32_1-MLC/resolve/main/",
			"local_id": "RedPajama-INCITE-Chat-3B-v1-q4f32_1",
			"model_lib_url": "https://raw.githubusercontent.com/mlc-ai/binary-mlc-llm-libs/main/RedPajama-INCITE-Chat-3B-v1/RedPajama-INCITE-Chat-3B-v1-q4f32_1-ctx2k-webgpu.wasm",
			"vram_required_MB": 3928.09,
			"low_resource_required": false,
		},
		{
			"model_url": "https://huggingface.co/mlc-ai/RedPajama-INCITE-Chat-3B-v1-q4f16_1-MLC/resolve/main/",
			"local_id": "RedPajama-INCITE-Chat-3B-v1-q4f16_1-1k",
			"model_lib_url": "https://raw.githubusercontent.com/mlc-ai/binary-mlc-llm-libs/main/RedPajama-INCITE-Chat-3B-v1/RedPajama-INCITE-Chat-3B-v1-q4f16_1-ctx1k-webgpu.wasm",
			"vram_required_MB": 2041.09,
			"low_resource_required": true,
			"required_features": ["shader-f16"],
		},
		{
			"model_url": "https://huggingface.co/mlc-ai/RedPajama-INCITE-Chat-3B-v1-q4f32_1-MLC/resolve/main/",
			"local_id": "RedPajama-INCITE-Chat-3B-v1-q4f32_1-1k",
			"model_lib_url": "https://raw.githubusercontent.com/mlc-ai/binary-mlc-llm-libs/main/RedPajama-INCITE-Chat-3B-v1/RedPajama-INCITE-Chat-3B-v1-q4f32_1-ctx1k-webgpu.wasm",
			"vram_required_MB": 2558.09,
			"low_resource_required": true,
		},
		// Phi-2
		{
			"model_url": "https://huggingface.co/mlc-ai/phi-2-q0f16-MLC/resolve/main/",
			"local_id": "Phi2-q0f16",
			"model_lib_url": "https://raw.githubusercontent.com/mlc-ai/binary-mlc-llm-libs/main/phi-2/phi-2-q0f16-ctx2k-webgpu.wasm",
			"vram_required_MB": 11079.47,
			"low_resource_required": false,
			"required_features": ["shader-f16"],
		},
		{
			"model_url": "https://huggingface.co/mlc-ai/phi-2-q0f32-MLC/resolve/main/",
			"local_id": "Phi2-q0f32",
			"model_lib_url": "https://raw.githubusercontent.com/mlc-ai/binary-mlc-llm-libs/main/phi-2/phi-2-q0f32-ctx2k-webgpu.wasm",
			"vram_required_MB": 12043.48,
			"low_resource_required": false,
		},
		{
			"model_url": "https://huggingface.co/mlc-ai/phi-2-q4f16_1-MLC/resolve/main/",
			"local_id": "Phi2-q4f16_1",
			"model_lib_url": "https://raw.githubusercontent.com/mlc-ai/binary-mlc-llm-libs/main/phi-2/phi-2-q4f16_1-ctx2k-webgpu.wasm",
			"vram_required_MB": 3053.97,
			"low_resource_required": false,
			"required_features": ["shader-f16"],
		},
		{
			"model_url": "https://huggingface.co/mlc-ai/phi-2-q4f32_1-MLC/resolve/main/",
			"local_id": "Phi2-q4f32_1",
			"model_lib_url": "https://raw.githubusercontent.com/mlc-ai/binary-mlc-llm-libs/main/phi-2/phi-2-q4f32_1-ctx2k-webgpu.wasm",
			"vram_required_MB": 4032.48,
			"low_resource_required": false,
		},
		{
			"model_url": "https://huggingface.co/mlc-ai/phi-2-q4f16_1-MLC/resolve/main/",
			"local_id": "Phi2-q4f16_1-1k",
			"model_lib_url": "https://raw.githubusercontent.com/mlc-ai/binary-mlc-llm-libs/main/phi-2/phi-2-q4f16_1-ctx1k-webgpu.wasm",
			"vram_required_MB": 2131.97,
			"low_resource_required": true,
			"required_features": ["shader-f16"],
		},
		{
			"model_url": "https://huggingface.co/mlc-ai/phi-2-q4f32_1-MLC/resolve/main/",
			"local_id": "Phi2-q4f32_1-1k",
			"model_lib_url": "https://raw.githubusercontent.com/mlc-ai/binary-mlc-llm-libs/main/phi-2/phi-2-q4f32_1-ctx1k-webgpu.wasm",
			"vram_required_MB": 2740.48,
			"low_resource_required": true,
		},
		// Phi-1.5
		{
			"model_url": "https://huggingface.co/mlc-ai/phi-1_5-q0f16-MLC/resolve/main/",
			"local_id": "Phi1.5-q0f16",
			"model_lib_url": "https://raw.githubusercontent.com/mlc-ai/binary-mlc-llm-libs/main/phi-1_5/phi-1_5-q0f16-ctx2k-webgpu.wasm",
			"vram_required_MB": 5818.09,
			"low_resource_required": false,
			"required_features": ["shader-f16"],
		},
		{
			"model_url": "https://huggingface.co/mlc-ai/phi-1_5-q0f32-MLC/resolve/main/",
			"local_id": "Phi1.5-q0f32",
			"model_lib_url": "https://raw.githubusercontent.com/mlc-ai/binary-mlc-llm-libs/main/phi-1_5/phi-1_5-q0f32-ctx2k-webgpu.wasm",
			"vram_required_MB": 6514.09,
			"low_resource_required": false,
		},
		{
			"model_url": "https://huggingface.co/mlc-ai/phi-1_5-q4f16_1-MLC/resolve/main/",
			"local_id": "Phi1.5-q4f16_1-1k",
			"model_lib_url": "https://raw.githubusercontent.com/mlc-ai/binary-mlc-llm-libs/main/phi-1_5/phi-1_5-q4f16_1-ctx1k-webgpu.wasm",
			"vram_required_MB": 1210.09,
			"low_resource_required": true,
			"required_features": ["shader-f16"],
		},
		{
			"model_url": "https://huggingface.co/mlc-ai/phi-1_5-q4f32_1-MLC/resolve/main/",
			"local_id": "Phi1.5-q4f32_1-1k",
			"model_lib_url": "https://raw.githubusercontent.com/mlc-ai/binary-mlc-llm-libs/main/phi-1_5/phi-1_5-q4f32_1-ctx1k-webgpu.wasm",
			"vram_required_MB": 1682.09,
			"low_resource_required": true,
		},
		// TinyLlama
		{
			"model_url": "https://huggingface.co/mlc-ai/TinyLlama-1.1B-Chat-v0.4-q0f16-MLC/resolve/main/",
			"local_id": "TinyLlama-1.1B-Chat-v0.4-q0f16",
			"model_lib_url": "https://raw.githubusercontent.com/mlc-ai/binary-mlc-llm-libs/main/TinyLlama-1.1B-Chat-v0.4/TinyLlama-1.1B-Chat-v0.4-q0f16-ctx2k-webgpu.wasm",
			"vram_required_MB": 5063.52,
			"low_resource_required": false,
			"required_features": ["shader-f16"],
		},
		{
			"model_url": "https://huggingface.co/mlc-ai/TinyLlama-1.1B-Chat-v0.4-q0f32-MLC/resolve/main/",
			"local_id": "TinyLlama-1.1B-Chat-v0.4-q0f32",
			"model_lib_url": "https://raw.githubusercontent.com/mlc-ai/binary-mlc-llm-libs/main/TinyLlama-1.1B-Chat-v0.4/TinyLlama-1.1B-Chat-v0.4-q0f32-ctx2k-webgpu.wasm",
			"vram_required_MB": 5394.53,
			"low_resource_required": false,
		},
		{
			"model_url": "https://huggingface.co/mlc-ai/TinyLlama-1.1B-Chat-v0.4-q4f16_1-MLC/resolve/main/",
			"local_id": "TinyLlama-1.1B-Chat-v0.4-q4f16_1-1k",
			"model_lib_url": "https://raw.githubusercontent.com/mlc-ai/binary-mlc-llm-libs/main/TinyLlama-1.1B-Chat-v0.4/TinyLlama-1.1B-Chat-v0.4-q4f16_1-ctx1k-webgpu.wasm",
			"vram_required_MB": 899.11,
			"low_resource_required": true,
			"required_features": ["shader-f16"],
		},
		{
			"model_url": "https://huggingface.co/mlc-ai/TinyLlama-1.1B-Chat-v0.4-q4f32_1-MLC/resolve/main/",
			"local_id": "TinyLlama-1.1B-Chat-v0.4-q4f32_1-1k",
			"model_lib_url": "https://raw.githubusercontent.com/mlc-ai/binary-mlc-llm-libs/main/TinyLlama-1.1B-Chat-v0.4/TinyLlama-1.1B-Chat-v0.4-q4f32_1-ctx1k-webgpu.wasm",
			"vram_required_MB": 992.11,
			"low_resource_required": true,
		},
		// Vicuna
		/* {
			"model_url": "https://huggingface.co/mlc-ai/mlc-chat-vicuna-v1-7b-q4f32_0/resolve/main/",
			"local_id": "vicuna-v1-7b-q4f32_0",
			"model_lib_url": "https://raw.githubusercontent.com/mlc-ai/binary-mlc-llm-libs/main/vicuna-v1-7b-q4f32_0-webgpu-v1.wasm",
			"vram_required_MB": 5063.52,
			"low_resource_required": false,
		}, */
	],
	/* model_lib_map: {
		"Llama-3-8B-Instruct-q4f32_1": "https://raw.githubusercontent.com/mlc-ai/binary-mlc-llm-libs/main/web-llm-models/v0_2_30/Llama-3-8B-Instruct-q4f32_1-ctx1k_cs1k-webgpu.wasm",
		"Llama-3-8B-Instruct-q4f32_1-1k": modelLibURLPrefix + modelVersion + "/Llama-3-8B-Instruct-q4f32_1-ctx1k_cs1k-webgpu.wasm",
		"Llama-3-70B-Instruct-q3f16_1": modelLibURLPrefix + modelVersion + "/Llama-3-70B-Instruct-q3f16_1-ctx4k_cs1k-webgpu.wasm",			
		"Llama-2-7b-chat-hf-q4f32_1": "https://raw.githubusercontent.com/mlc-ai/binary-mlc-llm-libs/main/Llama-2-7b-chat-hf-q4f32_1-webgpu.wasm",
		"Llama-2-7b-chat-hf-q4f16_1": "https://raw.githubusercontent.com/mlc-ai/binary-mlc-llm-libs/main/Llama-2-7b-chat-hf-q4f16_1-webgpu.wasm",
		"Llama-2-13b-chat-hf-q4f16_1": "https://raw.githubusercontent.com/mlc-ai/binary-mlc-llm-libs/main/Llama-2-13b-chat-hf-q4f16_1-webgpu.wasm",
		"Llama-2-70b-chat-hf-q4f16_1": "https://raw.githubusercontent.com/mlc-ai/binary-mlc-llm-libs/main/Llama-2-70b-chat-hf-q4f16_1-webgpu.wasm",
		"RedPajama-INCITE-Chat-3B-v1-q4f32_1": "https://raw.githubusercontent.com/mlc-ai/binary-mlc-llm-libs/main/RedPajama-INCITE-Chat-3B-v1-q4f32_1-webgpu.wasm",
		"RedPajama-INCITE-Chat-3B-v1-q4f16_1": "https://raw.githubusercontent.com/mlc-ai/binary-mlc-llm-libs/main/RedPajama-INCITE-Chat-3B-v1-q4f16_1-webgpu.wasm",
		"WizardCoder-15B-V1.0-q4f16_1": "https://raw.githubusercontent.com/mlc-ai/binary-mlc-llm-libs/main/WizardCoder-15B-V1.0-q4f16_1-webgpu.wasm",
		"WizardMath-7B-V1.0-q4f16_1": "https://raw.githubusercontent.com/mlc-ai/binary-mlc-llm-libs/main/Llama-2-7b-chat-hf-q4f16_1-webgpu.wasm",
		"WizardMath-7B-V1.0-q4f32_1": "https://raw.githubusercontent.com/mlc-ai/binary-mlc-llm-libs/main/Llama-2-7b-chat-hf-q4f32_1-webgpu.wasm",
		"WizardMath-13B-V1.0-q4f16_1": "https://raw.githubusercontent.com/mlc-ai/binary-mlc-llm-libs/main/Llama-2-13b-chat-hf-q4f16_1-webgpu.wasm",
		"WizardMath-70B-V1.0-q4f16_1": "https://raw.githubusercontent.com/mlc-ai/binary-mlc-llm-libs/main/Llama-2-70b-chat-hf-q4f16_1-webgpu.wasm",
		"Mistral-7B-Instruct-v0.1-q4f16_1": "https://raw.githubusercontent.com/mlc-ai/binary-mlc-llm-libs/main/Mistral-7B-Instruct-v0.1-q4f16_1-sw4k_cs1k-webgpu.wasm",
		"OpenHermes-2.5-Mistral-7B-q4f16_1": "https://raw.githubusercontent.com/mlc-ai/binary-mlc-llm-libs/main/Mistral-7B-Instruct-v0.1-q4f32_1-sw4k_cs1k-webgpu.wasm",
		"OpenHermes-2.5-Mistral-7B-q4f32_1": "https://raw.githubusercontent.com/mlc-ai/binary-mlc-llm-libs/main/Mistral-7B-Instruct-v0.1-q4f32_1-sw4k_cs1k-webgpu.wasm",
		"NeuralHermes-2.5-Mistral-7B-q4f16_1": "https://raw.githubusercontent.com/mlc-ai/binary-mlc-llm-libs/main/Mistral-7B-Instruct-v0.1-q4f32_1-sw4k_cs1k-webgpu.wasm",
		"NeuralHermes-2.5-Mistral-7B-q4f32_1": "https://raw.githubusercontent.com/mlc-ai/binary-mlc-llm-libs/main/Mistral-7B-Instruct-v0.1-q4f32_1-sw4k_cs1k-webgpu.wasm",
		// Models below fit for 128MB buffer limit (e.g. webgpu on Android)
		"Llama-2-7b-chat-hf-q4f16_1-1k": "https://raw.githubusercontent.com/mlc-ai/binary-mlc-llm-libs/main/Llama-2-7b-chat-hf-q4f16_1-1k-webgpu.wasm",
		"RedPajama-INCITE-Chat-3B-v1-q4f16_1-1k": "https://raw.githubusercontent.com/mlc-ai/binary-mlc-llm-libs/main/RedPajama-INCITE-Chat-3B-v1-q4f16_1-1k-webgpu.wasm",
		"RedPajama-INCITE-Chat-3B-v1-q4f32_1-1k": "https://raw.githubusercontent.com/mlc-ai/binary-mlc-llm-libs/main/RedPajama-INCITE-Chat-3B-v1-q4f32_1-1k-webgpu.wasm",
	}, */
	//"use_web_worker": true
}
