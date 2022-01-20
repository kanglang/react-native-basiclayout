/*
 * @Author: kanglang
 * @Date: 2020-10-12 14:46:29
 * @LastEditors: kanglang
 * @LastEditTime: 2022-01-20 12:05:45
 * @Description: 基础容器
 */
import React from 'react';
import { StyleSheet, SafeAreaView, ScrollView } from 'react-native';

const Basiclayout = ({
  isScroll = false,
  children,
  style,
}) => (
  <>
    {
      isScroll
        ? (
          <SafeAreaView style={{ flex: 1 }}>
            <ScrollView style={[styles.container, style]}>
              {children}
            </ScrollView>
          </SafeAreaView>
        )
        : (
          <SafeAreaView style={[{ flex: 1 }, style]}>
            {children}
          </SafeAreaView>
        )
    }
  </>

);
export default Basiclayout;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F2F3F7',
  },
});


