#include <iostream>
#include <bits/stdc++.h>
using namespace std;

int encryptedData(int data, int key)
{
      string str = to_string(data);
      string subs = str.substr(key, str.size() - key) + str.substr(0, key);

      int finans = stoi(subs);
      cout << subs;
      return finans;
}
int main()
{

      // cout << encryptedData(1276633, 3);
      encryptedData(1276633, 3);

      return 0;
}
