/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {View, Text} from 'react-native';
import Header from '../components/Header';
import Category from '../components/Category';
import Layout from '../components/Layout';
import {IPropsDashboard} from '../containers/dashboardContainer';
import StoreBranch from '../components/StoreBranch';
import {FONT} from '../assets/style';
import ListStore from '../components/ListStore';
import {useEffect} from 'react';
import {fetchListStore} from '../common/stores';
import {search} from '../helpers/function/search';
import {IStore} from '../interfaces/store.interface';

const DashboardScreen = (props: IPropsDashboard) => {
  const [listAllStoreBranch, setAllListStoreBranch]: any[] = useState([]);
  const [listAllStore, setAllListStore]: any[] = useState([]);
  const [listStoreBranch, setListStoreBranch]: any[] = useState([]);
  const [listStore, setListStore]: any[] = useState([]);

  const init = () => {
    fetchListStore()
      .then((res) => {
        console.info('RES', Object.keys(res.data));
        setListStoreBranch(res.data);
        setAllListStoreBranch(res.data);

        const list: any[] = res.data.reduce((acc: any[], curr: any) => {
          if (curr.store_business === '') {
            // curr.store_business = 'Unknown';
            curr.store_business = curr.store_name;
          }
          const idx = acc.findIndex(
            (item: any) => item.store_business === curr.store_business,
          );
          if (idx >= 0) {
            acc[idx].total_branch++;
          } else {
            acc.push({...curr, total_branch: 1});
            console.info(acc);
          }

          return acc;
        }, []);

        console.info('list', list);

        setListStore(list);
        setAllListStore(list);
      })
      .catch((err) => {
        console.info('ERR', err);
      });
  };

  const searchByKeyword = (keyword: string) => {
    if (keyword) {
      let listStore: any[] = search(keyword, listAllStore, [
        'store_business',
        'store_name',
      ]);
      setListStore(listStore);

      let listBranch: any[] = search(keyword, listAllStoreBranch, [
        'store_business',
        'store_name',
      ]);
      setListStoreBranch(listBranch);
    } else {
      setListStore(listAllStore);
      setListStoreBranch(listAllStoreBranch);
    }
  };

  const searchByCategory = (category: string) => {
    if (category) {
      const listBranch: any[] = listAllStoreBranch.filter(
        (item: IStore) => item.store_type === category,
      );
      setListStoreBranch(listBranch);

      const businessNames: string[] = listBranch.map(
        (item) => item.store_business,
      );

      const listStore: any[] = listAllStore.filter((item: IStore) =>
        businessNames.find((name) => name == item.store_business),
      );
      setListStore(listStore);
    } else {
      setListStore(listAllStore);
      setListStoreBranch(listAllStoreBranch);
    }
  };

  useEffect(() => {
    init();
  }, []);

  return (
    <Layout onRefresh={() => init()}>
      {/** HEADER */}
      <Header onSearch={(text: string) => searchByKeyword(text)} />

      {/** CATEGORY */}
      <View style={{marginTop: -50}}>
        <Category
          onSelected={(category: string) => searchByCategory(category)}
        />
      </View>

      {/** STORE */}
      <StoreBranch data={listStore} />

      {/** STORE JOIN */}
      <View style={{padding: 10}}>
        <Text style={FONT.sectionTitle}>Baru aja bergabung nih!</Text>
        <ListStore
          data={listStoreBranch.sort((a: any, b: any) => b.id - a.id)}
        />
      </View>

      {/** STORE FAVORITES */}
      <View style={{padding: 10}}>
        <Text style={FONT.sectionTitle}>Favourites!</Text>
        <ListStore
          data={listStoreBranch.sort(
            (a: any, b: any) => b.num_offers - a.num_offers,
          )}
        />
      </View>

      {/** DON'T MISSED OUT */}
      <View style={{padding: 10}}>
        <Text style={FONT.sectionTitle}>Don't miss out</Text>
        <ListStore
          data={listStoreBranch
            .filter((item: any) => item.num_offers > 0)
            .sort((a: any, b: any) => b.num_offers - a.num_offers)}
        />
      </View>
    </Layout>
  );
};

export default DashboardScreen;
