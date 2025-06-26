import React from 'react';
import { Box, Newline, Text } from 'ink';

export const GeminiPrivacyNotice = () => {
  return (
    <Box flexDirection="column" marginBottom={1}>
      <Box justifyContent="center">
        <Text bold>Gemini API Key Notice</Text>
      </Box>
      <Newline />
      <Text>
        To use Gemini API<Text color="red">[1]</Text>, Google AI Studio
        <Text color="blue">[2]</Text>, and the other Google developer services
        that reference these terms (collectively, the "APIs" or "Services"), you
        must accept the Google APIs Terms of Service (the "API Terms")
        <Text color="green">[3]</Text>, and the Gemini API Additional Terms of
        Service (the "Additional Terms")<Text color="magenta">[4]</Text>.
      </Text>
      <Newline />
      <Text>
        <Text color="red">[1]</Text>{' '}
        https://ai.google.dev/docs/gemini_api_overview
      </Text>
      <Text>
        <Text color="blue">[2]</Text> https://aistudio.google.com/
      </Text>
      <Text>
        <Text color="green">[3]</Text> https://developers.google.com/terms
      </Text>
      <Text>
        <Text color="magenta">[4]</Text> https://ai.google.dev/gemini-api/terms
      </Text>
    </Box>
  );
};
