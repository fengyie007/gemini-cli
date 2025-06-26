/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect, useCallback } from 'react';
import { Config } from '@google/gemini-cli-core';

export const usePrivacySettings = (config: Config) => {
  const [dataCollectionOptIn, setDataCollectionOptIn] = useState<
    boolean | undefined
  >(undefined);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchDataCollectionOptIn = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    try {
      // Placeholder for fetching the setting
      // const setting = await config.getSomePrivacySetting();
      // For now, we'll default to true.
      setDataCollectionOptIn(true);
    } catch (e) {
      setError(e instanceof Error ? e.message : String(e));
    } finally {
      setIsLoading(false);
    }
  }, [config]);

  useEffect(() => {
    fetchDataCollectionOptIn();
  }, [fetchDataCollectionOptIn]);

  const updateDataCollectionOptIn = useCallback(
    async (optIn: boolean) => {
      try {
        // Placeholder for updating the setting
        // await config.setSomePrivacySetting(optIn);
        setDataCollectionOptIn(optIn);
      } catch (e) {
        setError(e instanceof Error ? e.message : String(e));
      }
    },
    [config],
  );

  return {
    dataCollectionOptIn,
    isLoading,
    error,
    updateDataCollectionOptIn,
  };
};
