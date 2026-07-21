## Tier 5: Agents & Tool Use

Given your Claude Code usage, this tier connects directly to tools you already touch daily — you'll recognize the patterns from the inside.

- **Function/tool calling** — how tool schemas work, how models decide to call tools, parallel tool calls, tool results as conversation turns.
- **The agent loop** — ReAct pattern (reason → act → observe), planning, task decomposition, termination conditions.
- **MCP (Model Context Protocol)** — the open standard for connecting models to tools/data; servers, clients, resources vs. tools. Directly relevant since Claude Code is an MCP client and you can write your own servers.
- **Agentic coding architecture** — how Claude Code–style agents work: file system access, shell execution, edit strategies, permission models, context management over long sessions.
- **Multi-agent patterns** — orchestrator/worker, subagents, handoffs; when multi-agent helps vs. adds failure modes.
- **Agent reliability** — error recovery, guardrails, human-in-the-loop checkpoints, sandboxing.
- **Computer use / browser agents** — screenshot-based control, accessibility trees, the current frontier and its limits.
- **Reasoning/extended thinking models** — test-time compute, chain-of-thought as an explicit training target, when thinking modes help.

**Recommended anchors:** ReAct paper, Anthropic's "Building Effective Agents" essay, MCP documentation (modelcontextprotocol.io), Claude Code's own docs on subagents and hooks.
