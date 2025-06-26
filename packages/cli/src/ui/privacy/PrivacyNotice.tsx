/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */

import { Box, Text, useInput } from 'ink';
import { type Config, AuthType } from '@google/gemini-cli-core';
import { GeminiPrivacyNotice } from './GeminiPrivacyNotice.js';
import { VertexAIPrivacyNotice } from './VertexAIPrivacyNotice.js';
import { OAuthPrivacyNotice } from './OAuthPrivacyNotice.js';

interface PrivacyNoticeProps {
  onExit: () => void;
  config: Config;
}

const PrivacyNoticeText = ({ config }: { config: Config }) => {
  const authType = config.getContentGeneratorConfig()?.authType;

  switch (authType) {
    case AuthType.USE_GEMINI:
      return <GeminiPrivacyNotice />;
    case AuthType.USE_VERTEX_AI:
      return <VertexAIPrivacyNotice />;
    case AuthType.LOGIN_WITH_GOOGLE_PERSONAL:
    default:
      return <OAuthPrivacyNotice config={config} />;
  }
};

export const PrivacyNotice = ({ onExit, config }: PrivacyNoticeProps) => {
  useInput((input, key) => {
    if (key.escape) {
      onExit();
    }
  });

  return (
    <Box borderStyle="round" padding={1} flexDirection="column">
      <PrivacyNoticeText config={config} />
      <Text color="gray">Press Esc to exit.</Text>
    </Box>
  );
};
