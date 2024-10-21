import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React, {useCallback, useEffect, useState} from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
import {CardQrCode} from '../components/CardQrCode';
import {SizedBox} from '../components/SizedBox';
import {InversifyDIProvider} from '../global/container/provider/inversify.provider';
import {TYPES} from '../global/container/types';
import {RootStackParamList} from '../global/navigation/types';
import {QrCodeDTO} from '../model/dtos/qrcode';
import {QrCodeDataProvider} from '../network/providers/qrcode.data_provider';
import {PageableResponse} from '../utils/pageable';

type Props = NativeStackScreenProps<RootStackParamList, 'ListQrCodes'>;

export function ListQrCodes({navigation}: Props) {
  const limit = 10;
  const [page, setPage] = useState(0);
  const [loading, setLoading] = useState(true);
  const [qrCodes, setQrCodes] = useState<
    PageableResponse<QrCodeDTO[]> | undefined
  >();
  const fetchPage = useCallback(async () => {
    try {
      setLoading(true);
      const response = await InversifyDIProvider.get()
        .find<QrCodeDataProvider>(TYPES.QrCodeDataProvider)
        .getAllQrCodes({page: page, limit});

      setQrCodes(prev => {
        if (prev) {
          return {...prev, data: [...prev.data, ...response.data]};
        } else {
          return response;
        }
      });
    } catch (error) {
      // TODO catch error
    } finally {
      setLoading(false);
    }
  }, [page]);

  useEffect(() => {
    fetchPage();
  }, [fetchPage]);

  function onRefresh() {
    setQrCodes(undefined);
    setPage(0);
    fetchPage();
  }

  function onEndReached() {
    if (qrCodes && page + 1 < qrCodes.total / limit) {
      setPage(page + 1);
    }
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={qrCodes?.data ?? []}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <View>
            <CardQrCode
              onPressed={() => {
                navigation.navigate('MetadataReaderView', item);
              }}
              name={item.name}
              value={item.value}
            />
            <SizedBox height={10} />
          </View>
        )}
        onRefresh={onRefresh}
        refreshing={loading}
        onEndReached={onEndReached}
        onEndReachedThreshold={0.3}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
});
