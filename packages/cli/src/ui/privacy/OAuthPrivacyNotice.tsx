import { Box, Newline, Text } from 'ink';
import { RadioButtonSelect } from '../components/shared/RadioButtonSelect.js';
import { usePrivacySettings } from '../hooks/usePrivacySettings.js';
import { Config } from '@google/gemini-cli-core';

interface OAuthPrivacyNoticeProps {
  config: Config;
}

export const OAuthPrivacyNotice = ({ config }: OAuthPrivacyNoticeProps) => {
  const { dataCollectionOptIn, isLoading, error, updateDataCollectionOptIn } =
    usePrivacySettings(config);

  const items = [
    { label: 'Yes', value: true },
    { label: 'No', value: false },
  ];

  return (
    <Box flexDirection="column" marginBottom={1}>
      <Box justifyContent="center">
        <Text bold>
          Gemini Code Assist for individuals and Gemini CLI Privacy Notice
        </Text>
      </Box>
      <Newline />
      <Text>
        This notice and our Privacy Policy<Text color="red">[1]</Text> describes
        how Gemini Code Assist and Gemini CLI handles your data. Please read
        them carefully.
      </Text>
      <Newline />
      <Text>
        When you use Gemini Code Assist for individuals or Gemini CLI, Google
        collects your prompts, related code, generated output, code edits,
        related feature usage information, and your feedback to provide,
        improve, and develop Google products and services and machine learning
        technologies.
      </Text>
      <Newline />
      <Text>
        To help with quality and improve our products (such as generative
        machine-learning models), human reviewers may read, annotate, and
        process the data collected above. We take steps to protect your privacy
        as part of this process. This includes disconnecting the data from your
        Google Account before reviewers see or annotate it, and storing those
        disconnected copies for up to 18 months. Please don't submit
        confidential information or any data you wouldn't want a reviewer to see
        or Google to use to improve our products, services and machine-learning
        technologies.
      </Text>
      <Newline />
      <Text>
        <Text color="red">[1]</Text> https://policies.google.com/privacy
      </Text>
      <Newline />
      {isLoading ? (
        <Text>Loading Opt-in settings...</Text>
      ) : error ? (
        <Text color="red">Error loading Opt-in settings: {error}</Text>
      ) : (
        <Box flexDirection="column">
          <Text>
            Allow Google to use this data to develop and improve Google's
            machine learning models?
          </Text>
          <RadioButtonSelect
            items={items}
            initialIndex={dataCollectionOptIn ? 0 : 1}
            onSelect={(value) => updateDataCollectionOptIn(value)}
          />
        </Box>
      )}
    </Box>
  );
};
