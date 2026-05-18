#ifndef SRC_TRACE_PROCESSOR_TABLES_WINSCOPE_TABLES_PY_H_
#define SRC_TRACE_PROCESSOR_TABLES_WINSCOPE_TABLES_PY_H_

#include <array>
#include <cstddef>
#include <cstdint>
#include <memory>
#include <optional>
#include <type_traits>
#include <utility>
#include <vector>

#include "perfetto/base/logging.h"
#include "perfetto/trace_processor/basic_types.h"
#include "perfetto/trace_processor/ref_counted.h"
#include "src/trace_processor/containers/bit_vector.h"
#include "src/trace_processor/containers/row_map.h"
#include "src/trace_processor/containers/string_pool.h"
#include "src/trace_processor/db/column/arrangement_overlay.h"
#include "src/trace_processor/db/column/data_layer.h"
#include "src/trace_processor/db/column/dense_null_overlay.h"
#include "src/trace_processor/db/column/numeric_storage.h"
#include "src/trace_processor/db/column/id_storage.h"
#include "src/trace_processor/db/column/null_overlay.h"
#include "src/trace_processor/db/column/range_overlay.h"
#include "src/trace_processor/db/column/selector_overlay.h"
#include "src/trace_processor/db/column/set_id_storage.h"
#include "src/trace_processor/db/column/string_storage.h"
#include "src/trace_processor/db/column/types.h"
#include "src/trace_processor/db/column_storage.h"
#include "src/trace_processor/db/column.h"
#include "src/trace_processor/db/table.h"
#include "src/trace_processor/db/typed_column.h"
#include "src/trace_processor/db/typed_column_internal.h"
#include "src/trace_processor/tables/macros_internal.h"



namespace perfetto::trace_processor::tables {

class ProtoLogTable : public macros_internal::MacroTable {
 public:
  static constexpr uint32_t kColumnCount = 7;

  struct Id : public BaseId {
    Id() = default;
    explicit constexpr Id(uint32_t v) : BaseId(v) {}
  };
  static_assert(std::is_trivially_destructible_v<Id>,
                "Inheritance used without trivial destruction");
    
  struct ColumnIndex {
    static constexpr uint32_t id = 0;
    static constexpr uint32_t ts = 1;
    static constexpr uint32_t level = 2;
    static constexpr uint32_t tag = 3;
    static constexpr uint32_t message = 4;
    static constexpr uint32_t stacktrace = 5;
    static constexpr uint32_t location = 6;
  };
  struct ColumnType {
    using id = IdColumn<ProtoLogTable::Id>;
    using ts = TypedColumn<int64_t>;
    using level = TypedColumn<StringPool::Id>;
    using tag = TypedColumn<StringPool::Id>;
    using message = TypedColumn<StringPool::Id>;
    using stacktrace = TypedColumn<StringPool::Id>;
    using location = TypedColumn<StringPool::Id>;
  };
  struct Row : public macros_internal::RootParentTable::Row {
    Row(int64_t in_ts = {},
        StringPool::Id in_level = {},
        StringPool::Id in_tag = {},
        StringPool::Id in_message = {},
        StringPool::Id in_stacktrace = {},
        StringPool::Id in_location = {},
        std::nullptr_t = nullptr)
        : macros_internal::RootParentTable::Row(),
          ts(in_ts),
          level(in_level),
          tag(in_tag),
          message(in_message),
          stacktrace(in_stacktrace),
          location(in_location) {}
    int64_t ts;
    StringPool::Id level;
    StringPool::Id tag;
    StringPool::Id message;
    StringPool::Id stacktrace;
    StringPool::Id location;

    bool operator==(const ProtoLogTable::Row& other) const {
      return ColumnType::ts::Equals(ts, other.ts) &&
       ColumnType::level::Equals(level, other.level) &&
       ColumnType::tag::Equals(tag, other.tag) &&
       ColumnType::message::Equals(message, other.message) &&
       ColumnType::stacktrace::Equals(stacktrace, other.stacktrace) &&
       ColumnType::location::Equals(location, other.location);
    }
  };
  struct ColumnFlag {
    static constexpr uint32_t ts = static_cast<uint32_t>(ColumnLegacy::Flag::kSorted) | ColumnType::ts::default_flags();
    static constexpr uint32_t level = ColumnType::level::default_flags();
    static constexpr uint32_t tag = ColumnType::tag::default_flags();
    static constexpr uint32_t message = ColumnType::message::default_flags();
    static constexpr uint32_t stacktrace = ColumnType::stacktrace::default_flags();
    static constexpr uint32_t location = ColumnType::location::default_flags();
  };

  class RowNumber;
  class ConstRowReference;
  class RowReference;

  class RowNumber : public macros_internal::AbstractRowNumber<
      ProtoLogTable, ConstRowReference, RowReference> {
   public:
    explicit RowNumber(uint32_t row_number)
        : AbstractRowNumber(row_number) {}
  };
  static_assert(std::is_trivially_destructible_v<RowNumber>,
                "Inheritance used without trivial destruction");

  class ConstRowReference : public macros_internal::AbstractConstRowReference<
    ProtoLogTable, RowNumber> {
   public:
    ConstRowReference(const ProtoLogTable* table, uint32_t row_number)
        : AbstractConstRowReference(table, row_number) {}

    ColumnType::id::type id() const {
      return table()->id()[row_number_];
    }
    ColumnType::ts::type ts() const {
      return table()->ts()[row_number_];
    }
    ColumnType::level::type level() const {
      return table()->level()[row_number_];
    }
    ColumnType::tag::type tag() const {
      return table()->tag()[row_number_];
    }
    ColumnType::message::type message() const {
      return table()->message()[row_number_];
    }
    ColumnType::stacktrace::type stacktrace() const {
      return table()->stacktrace()[row_number_];
    }
    ColumnType::location::type location() const {
      return table()->location()[row_number_];
    }
  };
  static_assert(std::is_trivially_destructible_v<ConstRowReference>,
                "Inheritance used without trivial destruction");
  class RowReference : public ConstRowReference {
   public:
    RowReference(const ProtoLogTable* table, uint32_t row_number)
        : ConstRowReference(table, row_number) {}

    void set_ts(
        ColumnType::ts::non_optional_type v) {
      return mutable_table()->mutable_ts()->Set(row_number_, v);
    }
    void set_level(
        ColumnType::level::non_optional_type v) {
      return mutable_table()->mutable_level()->Set(row_number_, v);
    }
    void set_tag(
        ColumnType::tag::non_optional_type v) {
      return mutable_table()->mutable_tag()->Set(row_number_, v);
    }
    void set_message(
        ColumnType::message::non_optional_type v) {
      return mutable_table()->mutable_message()->Set(row_number_, v);
    }
    void set_stacktrace(
        ColumnType::stacktrace::non_optional_type v) {
      return mutable_table()->mutable_stacktrace()->Set(row_number_, v);
    }
    void set_location(
        ColumnType::location::non_optional_type v) {
      return mutable_table()->mutable_location()->Set(row_number_, v);
    }

   private:
    ProtoLogTable* mutable_table() const {
      return const_cast<ProtoLogTable*>(table());
    }
  };
  static_assert(std::is_trivially_destructible_v<RowReference>,
                "Inheritance used without trivial destruction");

  class ConstIterator;
  class ConstIterator : public macros_internal::AbstractConstIterator<
    ConstIterator, ProtoLogTable, RowNumber, ConstRowReference> {
   public:
    ColumnType::id::type id() const {
      const auto& col = table()->id();
      return col.GetAtIdx(
        iterator_.StorageIndexForColumn(col.index_in_table()));
    }
    ColumnType::ts::type ts() const {
      const auto& col = table()->ts();
      return col.GetAtIdx(
        iterator_.StorageIndexForColumn(col.index_in_table()));
    }
    ColumnType::level::type level() const {
      const auto& col = table()->level();
      return col.GetAtIdx(
        iterator_.StorageIndexForColumn(col.index_in_table()));
    }
    ColumnType::tag::type tag() const {
      const auto& col = table()->tag();
      return col.GetAtIdx(
        iterator_.StorageIndexForColumn(col.index_in_table()));
    }
    ColumnType::message::type message() const {
      const auto& col = table()->message();
      return col.GetAtIdx(
        iterator_.StorageIndexForColumn(col.index_in_table()));
    }
    ColumnType::stacktrace::type stacktrace() const {
      const auto& col = table()->stacktrace();
      return col.GetAtIdx(
        iterator_.StorageIndexForColumn(col.index_in_table()));
    }
    ColumnType::location::type location() const {
      const auto& col = table()->location();
      return col.GetAtIdx(
        iterator_.StorageIndexForColumn(col.index_in_table()));
    }

   protected:
    explicit ConstIterator(const ProtoLogTable* table,
                           Table::Iterator iterator)
        : AbstractConstIterator(table, std::move(iterator)) {}

    uint32_t CurrentRowNumber() const {
      return iterator_.StorageIndexForLastOverlay();
    }

   private:
    friend class ProtoLogTable;
    friend class macros_internal::AbstractConstIterator<
      ConstIterator, ProtoLogTable, RowNumber, ConstRowReference>;
  };
  class Iterator : public ConstIterator {
    public:
     RowReference row_reference() const {
       return {const_cast<ProtoLogTable*>(table()), CurrentRowNumber()};
     }

    private:
     friend class ProtoLogTable;

     explicit Iterator(ProtoLogTable* table, Table::Iterator iterator)
        : ConstIterator(table, std::move(iterator)) {}
  };

  struct IdAndRow {
    Id id;
    uint32_t row;
    RowReference row_reference;
    RowNumber row_number;
  };

  static std::vector<ColumnLegacy> GetColumns(
      ProtoLogTable* self,
      const macros_internal::MacroTable* parent) {
    std::vector<ColumnLegacy> columns =
        CopyColumnsFromParentOrAddRootColumns(parent);
    uint32_t olay_idx = OverlayCount(parent);
    AddColumnToVector(columns, "ts", &self->ts_, ColumnFlag::ts,
                      static_cast<uint32_t>(columns.size()), olay_idx);
    AddColumnToVector(columns, "level", &self->level_, ColumnFlag::level,
                      static_cast<uint32_t>(columns.size()), olay_idx);
    AddColumnToVector(columns, "tag", &self->tag_, ColumnFlag::tag,
                      static_cast<uint32_t>(columns.size()), olay_idx);
    AddColumnToVector(columns, "message", &self->message_, ColumnFlag::message,
                      static_cast<uint32_t>(columns.size()), olay_idx);
    AddColumnToVector(columns, "stacktrace", &self->stacktrace_, ColumnFlag::stacktrace,
                      static_cast<uint32_t>(columns.size()), olay_idx);
    AddColumnToVector(columns, "location", &self->location_, ColumnFlag::location,
                      static_cast<uint32_t>(columns.size()), olay_idx);
    base::ignore_result(self);
    return columns;
  }

  PERFETTO_NO_INLINE explicit ProtoLogTable(StringPool* pool)
      : macros_internal::MacroTable(
          pool,
          GetColumns(this, nullptr),
          nullptr),
        ts_(ColumnStorage<ColumnType::ts::stored_type>::Create<false>()),
        level_(ColumnStorage<ColumnType::level::stored_type>::Create<false>()),
        tag_(ColumnStorage<ColumnType::tag::stored_type>::Create<false>()),
        message_(ColumnStorage<ColumnType::message::stored_type>::Create<false>()),
        stacktrace_(ColumnStorage<ColumnType::stacktrace::stored_type>::Create<false>()),
        location_(ColumnStorage<ColumnType::location::stored_type>::Create<false>())
,
        id_storage_layer_(new column::IdStorage()),
        ts_storage_layer_(
        new column::NumericStorage<ColumnType::ts::non_optional_stored_type>(
          &ts_.vector(),
          ColumnTypeHelper<ColumnType::ts::stored_type>::ToColumnType(),
          true)),
        level_storage_layer_(
          new column::StringStorage(string_pool(), &level_.vector())),
        tag_storage_layer_(
          new column::StringStorage(string_pool(), &tag_.vector())),
        message_storage_layer_(
          new column::StringStorage(string_pool(), &message_.vector())),
        stacktrace_storage_layer_(
          new column::StringStorage(string_pool(), &stacktrace_.vector())),
        location_storage_layer_(
          new column::StringStorage(string_pool(), &location_.vector()))
         {
    static_assert(
        ColumnLegacy::IsFlagsAndTypeValid<ColumnType::ts::stored_type>(
          ColumnFlag::ts),
        "Column type and flag combination is not valid");
      static_assert(
        ColumnLegacy::IsFlagsAndTypeValid<ColumnType::level::stored_type>(
          ColumnFlag::level),
        "Column type and flag combination is not valid");
      static_assert(
        ColumnLegacy::IsFlagsAndTypeValid<ColumnType::tag::stored_type>(
          ColumnFlag::tag),
        "Column type and flag combination is not valid");
      static_assert(
        ColumnLegacy::IsFlagsAndTypeValid<ColumnType::message::stored_type>(
          ColumnFlag::message),
        "Column type and flag combination is not valid");
      static_assert(
        ColumnLegacy::IsFlagsAndTypeValid<ColumnType::stacktrace::stored_type>(
          ColumnFlag::stacktrace),
        "Column type and flag combination is not valid");
      static_assert(
        ColumnLegacy::IsFlagsAndTypeValid<ColumnType::location::stored_type>(
          ColumnFlag::location),
        "Column type and flag combination is not valid");
    OnConstructionCompletedRegularConstructor(
      {id_storage_layer_,ts_storage_layer_,level_storage_layer_,tag_storage_layer_,message_storage_layer_,stacktrace_storage_layer_,location_storage_layer_},
      {{},{},{},{},{},{},{}});
  }
  ~ProtoLogTable() override;

  static const char* Name() { return "protolog"; }

  static Table::Schema ComputeStaticSchema() {
    Table::Schema schema;
    schema.columns.emplace_back(Table::Schema::Column{
        "id", SqlValue::Type::kLong, true, true, false, false});
    schema.columns.emplace_back(Table::Schema::Column{
        "ts", ColumnType::ts::SqlValueType(), false,
        true,
        false,
        false});
    schema.columns.emplace_back(Table::Schema::Column{
        "level", ColumnType::level::SqlValueType(), false,
        false,
        false,
        false});
    schema.columns.emplace_back(Table::Schema::Column{
        "tag", ColumnType::tag::SqlValueType(), false,
        false,
        false,
        false});
    schema.columns.emplace_back(Table::Schema::Column{
        "message", ColumnType::message::SqlValueType(), false,
        false,
        false,
        false});
    schema.columns.emplace_back(Table::Schema::Column{
        "stacktrace", ColumnType::stacktrace::SqlValueType(), false,
        false,
        false,
        false});
    schema.columns.emplace_back(Table::Schema::Column{
        "location", ColumnType::location::SqlValueType(), false,
        false,
        false,
        false});
    return schema;
  }

  ConstIterator IterateRows() const {
    return ConstIterator(this, Table::IterateRows());
  }

  Iterator IterateRows() { return Iterator(this, Table::IterateRows()); }

  ConstIterator FilterToIterator(const Query& q) const {
    return ConstIterator(this, QueryToIterator(q));
  }

  Iterator FilterToIterator(const Query& q) {
    return Iterator(this, QueryToIterator(q));
  }

  void ShrinkToFit() {
    ts_.ShrinkToFit();
    level_.ShrinkToFit();
    tag_.ShrinkToFit();
    message_.ShrinkToFit();
    stacktrace_.ShrinkToFit();
    location_.ShrinkToFit();
  }

  ConstRowReference operator[](uint32_t r) const {
    return ConstRowReference(this, r);
  }
  RowReference operator[](uint32_t r) { return RowReference(this, r); }
  ConstRowReference operator[](RowNumber r) const {
    return ConstRowReference(this, r.row_number());
  }
  RowReference operator[](RowNumber r) {
    return RowReference(this, r.row_number());
  }

  std::optional<ConstRowReference> FindById(Id find_id) const {
    std::optional<uint32_t> row = id().IndexOf(find_id);
    return row ? std::make_optional(ConstRowReference(this, *row))
               : std::nullopt;
  }

  std::optional<RowReference> FindById(Id find_id) {
    std::optional<uint32_t> row = id().IndexOf(find_id);
    return row ? std::make_optional(RowReference(this, *row)) : std::nullopt;
  }

  IdAndRow Insert(const Row& row) {
    uint32_t row_number = row_count();
    Id id = Id{row_number};
    mutable_ts()->Append(row.ts);
    mutable_level()->Append(row.level);
    mutable_tag()->Append(row.tag);
    mutable_message()->Append(row.message);
    mutable_stacktrace()->Append(row.stacktrace);
    mutable_location()->Append(row.location);
    UpdateSelfOverlayAfterInsert();
    return IdAndRow{id, row_number, RowReference(this, row_number),
                     RowNumber(row_number)};
  }

  

  const IdColumn<ProtoLogTable::Id>& id() const {
    return static_cast<const ColumnType::id&>(columns()[ColumnIndex::id]);
  }
  const TypedColumn<int64_t>& ts() const {
    return static_cast<const ColumnType::ts&>(columns()[ColumnIndex::ts]);
  }
  const TypedColumn<StringPool::Id>& level() const {
    return static_cast<const ColumnType::level&>(columns()[ColumnIndex::level]);
  }
  const TypedColumn<StringPool::Id>& tag() const {
    return static_cast<const ColumnType::tag&>(columns()[ColumnIndex::tag]);
  }
  const TypedColumn<StringPool::Id>& message() const {
    return static_cast<const ColumnType::message&>(columns()[ColumnIndex::message]);
  }
  const TypedColumn<StringPool::Id>& stacktrace() const {
    return static_cast<const ColumnType::stacktrace&>(columns()[ColumnIndex::stacktrace]);
  }
  const TypedColumn<StringPool::Id>& location() const {
    return static_cast<const ColumnType::location&>(columns()[ColumnIndex::location]);
  }

  TypedColumn<int64_t>* mutable_ts() {
    return static_cast<ColumnType::ts*>(
        GetColumn(ColumnIndex::ts));
  }
  TypedColumn<StringPool::Id>* mutable_level() {
    return static_cast<ColumnType::level*>(
        GetColumn(ColumnIndex::level));
  }
  TypedColumn<StringPool::Id>* mutable_tag() {
    return static_cast<ColumnType::tag*>(
        GetColumn(ColumnIndex::tag));
  }
  TypedColumn<StringPool::Id>* mutable_message() {
    return static_cast<ColumnType::message*>(
        GetColumn(ColumnIndex::message));
  }
  TypedColumn<StringPool::Id>* mutable_stacktrace() {
    return static_cast<ColumnType::stacktrace*>(
        GetColumn(ColumnIndex::stacktrace));
  }
  TypedColumn<StringPool::Id>* mutable_location() {
    return static_cast<ColumnType::location*>(
        GetColumn(ColumnIndex::location));
  }

 private:
  
  
  ColumnStorage<ColumnType::ts::stored_type> ts_;
  ColumnStorage<ColumnType::level::stored_type> level_;
  ColumnStorage<ColumnType::tag::stored_type> tag_;
  ColumnStorage<ColumnType::message::stored_type> message_;
  ColumnStorage<ColumnType::stacktrace::stored_type> stacktrace_;
  ColumnStorage<ColumnType::location::stored_type> location_;

  RefPtr<column::StorageLayer> id_storage_layer_;
  RefPtr<column::StorageLayer> ts_storage_layer_;
  RefPtr<column::StorageLayer> level_storage_layer_;
  RefPtr<column::StorageLayer> tag_storage_layer_;
  RefPtr<column::StorageLayer> message_storage_layer_;
  RefPtr<column::StorageLayer> stacktrace_storage_layer_;
  RefPtr<column::StorageLayer> location_storage_layer_;

  
};
  

class InputMethodClientsTable : public macros_internal::MacroTable {
 public:
  static constexpr uint32_t kColumnCount = 4;

  struct Id : public BaseId {
    Id() = default;
    explicit constexpr Id(uint32_t v) : BaseId(v) {}
  };
  static_assert(std::is_trivially_destructible_v<Id>,
                "Inheritance used without trivial destruction");
    
  struct ColumnIndex {
    static constexpr uint32_t id = 0;
    static constexpr uint32_t ts = 1;
    static constexpr uint32_t arg_set_id = 2;
    static constexpr uint32_t base64_proto_id = 3;
  };
  struct ColumnType {
    using id = IdColumn<InputMethodClientsTable::Id>;
    using ts = TypedColumn<int64_t>;
    using arg_set_id = TypedColumn<std::optional<uint32_t>>;
    using base64_proto_id = TypedColumn<std::optional<uint32_t>>;
  };
  struct Row : public macros_internal::RootParentTable::Row {
    Row(int64_t in_ts = {},
        std::optional<uint32_t> in_arg_set_id = {},
        std::optional<uint32_t> in_base64_proto_id = {},
        std::nullptr_t = nullptr)
        : macros_internal::RootParentTable::Row(),
          ts(in_ts),
          arg_set_id(in_arg_set_id),
          base64_proto_id(in_base64_proto_id) {}
    int64_t ts;
    std::optional<uint32_t> arg_set_id;
    std::optional<uint32_t> base64_proto_id;

    bool operator==(const InputMethodClientsTable::Row& other) const {
      return ColumnType::ts::Equals(ts, other.ts) &&
       ColumnType::arg_set_id::Equals(arg_set_id, other.arg_set_id) &&
       ColumnType::base64_proto_id::Equals(base64_proto_id, other.base64_proto_id);
    }
  };
  struct ColumnFlag {
    static constexpr uint32_t ts = static_cast<uint32_t>(ColumnLegacy::Flag::kSorted) | ColumnType::ts::default_flags();
    static constexpr uint32_t arg_set_id = ColumnType::arg_set_id::default_flags();
    static constexpr uint32_t base64_proto_id = ColumnType::base64_proto_id::default_flags();
  };

  class RowNumber;
  class ConstRowReference;
  class RowReference;

  class RowNumber : public macros_internal::AbstractRowNumber<
      InputMethodClientsTable, ConstRowReference, RowReference> {
   public:
    explicit RowNumber(uint32_t row_number)
        : AbstractRowNumber(row_number) {}
  };
  static_assert(std::is_trivially_destructible_v<RowNumber>,
                "Inheritance used without trivial destruction");

  class ConstRowReference : public macros_internal::AbstractConstRowReference<
    InputMethodClientsTable, RowNumber> {
   public:
    ConstRowReference(const InputMethodClientsTable* table, uint32_t row_number)
        : AbstractConstRowReference(table, row_number) {}

    ColumnType::id::type id() const {
      return table()->id()[row_number_];
    }
    ColumnType::ts::type ts() const {
      return table()->ts()[row_number_];
    }
    ColumnType::arg_set_id::type arg_set_id() const {
      return table()->arg_set_id()[row_number_];
    }
    ColumnType::base64_proto_id::type base64_proto_id() const {
      return table()->base64_proto_id()[row_number_];
    }
  };
  static_assert(std::is_trivially_destructible_v<ConstRowReference>,
                "Inheritance used without trivial destruction");
  class RowReference : public ConstRowReference {
   public:
    RowReference(const InputMethodClientsTable* table, uint32_t row_number)
        : ConstRowReference(table, row_number) {}

    void set_ts(
        ColumnType::ts::non_optional_type v) {
      return mutable_table()->mutable_ts()->Set(row_number_, v);
    }
    void set_arg_set_id(
        ColumnType::arg_set_id::non_optional_type v) {
      return mutable_table()->mutable_arg_set_id()->Set(row_number_, v);
    }
    void set_base64_proto_id(
        ColumnType::base64_proto_id::non_optional_type v) {
      return mutable_table()->mutable_base64_proto_id()->Set(row_number_, v);
    }

   private:
    InputMethodClientsTable* mutable_table() const {
      return const_cast<InputMethodClientsTable*>(table());
    }
  };
  static_assert(std::is_trivially_destructible_v<RowReference>,
                "Inheritance used without trivial destruction");

  class ConstIterator;
  class ConstIterator : public macros_internal::AbstractConstIterator<
    ConstIterator, InputMethodClientsTable, RowNumber, ConstRowReference> {
   public:
    ColumnType::id::type id() const {
      const auto& col = table()->id();
      return col.GetAtIdx(
        iterator_.StorageIndexForColumn(col.index_in_table()));
    }
    ColumnType::ts::type ts() const {
      const auto& col = table()->ts();
      return col.GetAtIdx(
        iterator_.StorageIndexForColumn(col.index_in_table()));
    }
    ColumnType::arg_set_id::type arg_set_id() const {
      const auto& col = table()->arg_set_id();
      return col.GetAtIdx(
        iterator_.StorageIndexForColumn(col.index_in_table()));
    }
    ColumnType::base64_proto_id::type base64_proto_id() const {
      const auto& col = table()->base64_proto_id();
      return col.GetAtIdx(
        iterator_.StorageIndexForColumn(col.index_in_table()));
    }

   protected:
    explicit ConstIterator(const InputMethodClientsTable* table,
                           Table::Iterator iterator)
        : AbstractConstIterator(table, std::move(iterator)) {}

    uint32_t CurrentRowNumber() const {
      return iterator_.StorageIndexForLastOverlay();
    }

   private:
    friend class InputMethodClientsTable;
    friend class macros_internal::AbstractConstIterator<
      ConstIterator, InputMethodClientsTable, RowNumber, ConstRowReference>;
  };
  class Iterator : public ConstIterator {
    public:
     RowReference row_reference() const {
       return {const_cast<InputMethodClientsTable*>(table()), CurrentRowNumber()};
     }

    private:
     friend class InputMethodClientsTable;

     explicit Iterator(InputMethodClientsTable* table, Table::Iterator iterator)
        : ConstIterator(table, std::move(iterator)) {}
  };

  struct IdAndRow {
    Id id;
    uint32_t row;
    RowReference row_reference;
    RowNumber row_number;
  };

  static std::vector<ColumnLegacy> GetColumns(
      InputMethodClientsTable* self,
      const macros_internal::MacroTable* parent) {
    std::vector<ColumnLegacy> columns =
        CopyColumnsFromParentOrAddRootColumns(parent);
    uint32_t olay_idx = OverlayCount(parent);
    AddColumnToVector(columns, "ts", &self->ts_, ColumnFlag::ts,
                      static_cast<uint32_t>(columns.size()), olay_idx);
    AddColumnToVector(columns, "arg_set_id", &self->arg_set_id_, ColumnFlag::arg_set_id,
                      static_cast<uint32_t>(columns.size()), olay_idx);
    AddColumnToVector(columns, "base64_proto_id", &self->base64_proto_id_, ColumnFlag::base64_proto_id,
                      static_cast<uint32_t>(columns.size()), olay_idx);
    base::ignore_result(self);
    return columns;
  }

  PERFETTO_NO_INLINE explicit InputMethodClientsTable(StringPool* pool)
      : macros_internal::MacroTable(
          pool,
          GetColumns(this, nullptr),
          nullptr),
        ts_(ColumnStorage<ColumnType::ts::stored_type>::Create<false>()),
        arg_set_id_(ColumnStorage<ColumnType::arg_set_id::stored_type>::Create<false>()),
        base64_proto_id_(ColumnStorage<ColumnType::base64_proto_id::stored_type>::Create<false>())
,
        id_storage_layer_(new column::IdStorage()),
        ts_storage_layer_(
        new column::NumericStorage<ColumnType::ts::non_optional_stored_type>(
          &ts_.vector(),
          ColumnTypeHelper<ColumnType::ts::stored_type>::ToColumnType(),
          true)),
        arg_set_id_storage_layer_(
          new column::NumericStorage<ColumnType::arg_set_id::non_optional_stored_type>(
            &arg_set_id_.non_null_vector(),
            ColumnTypeHelper<ColumnType::arg_set_id::stored_type>::ToColumnType(),
            false)),
        base64_proto_id_storage_layer_(
          new column::NumericStorage<ColumnType::base64_proto_id::non_optional_stored_type>(
            &base64_proto_id_.non_null_vector(),
            ColumnTypeHelper<ColumnType::base64_proto_id::stored_type>::ToColumnType(),
            false))
,
        arg_set_id_null_layer_(new column::NullOverlay(arg_set_id_.bv())),
        base64_proto_id_null_layer_(new column::NullOverlay(base64_proto_id_.bv())) {
    static_assert(
        ColumnLegacy::IsFlagsAndTypeValid<ColumnType::ts::stored_type>(
          ColumnFlag::ts),
        "Column type and flag combination is not valid");
      static_assert(
        ColumnLegacy::IsFlagsAndTypeValid<ColumnType::arg_set_id::stored_type>(
          ColumnFlag::arg_set_id),
        "Column type and flag combination is not valid");
      static_assert(
        ColumnLegacy::IsFlagsAndTypeValid<ColumnType::base64_proto_id::stored_type>(
          ColumnFlag::base64_proto_id),
        "Column type and flag combination is not valid");
    OnConstructionCompletedRegularConstructor(
      {id_storage_layer_,ts_storage_layer_,arg_set_id_storage_layer_,base64_proto_id_storage_layer_},
      {{},{},arg_set_id_null_layer_,base64_proto_id_null_layer_});
  }
  ~InputMethodClientsTable() override;

  static const char* Name() { return "__intrinsic_inputmethod_clients"; }

  static Table::Schema ComputeStaticSchema() {
    Table::Schema schema;
    schema.columns.emplace_back(Table::Schema::Column{
        "id", SqlValue::Type::kLong, true, true, false, false});
    schema.columns.emplace_back(Table::Schema::Column{
        "ts", ColumnType::ts::SqlValueType(), false,
        true,
        false,
        false});
    schema.columns.emplace_back(Table::Schema::Column{
        "arg_set_id", ColumnType::arg_set_id::SqlValueType(), false,
        false,
        false,
        false});
    schema.columns.emplace_back(Table::Schema::Column{
        "base64_proto_id", ColumnType::base64_proto_id::SqlValueType(), false,
        false,
        false,
        false});
    return schema;
  }

  ConstIterator IterateRows() const {
    return ConstIterator(this, Table::IterateRows());
  }

  Iterator IterateRows() { return Iterator(this, Table::IterateRows()); }

  ConstIterator FilterToIterator(const Query& q) const {
    return ConstIterator(this, QueryToIterator(q));
  }

  Iterator FilterToIterator(const Query& q) {
    return Iterator(this, QueryToIterator(q));
  }

  void ShrinkToFit() {
    ts_.ShrinkToFit();
    arg_set_id_.ShrinkToFit();
    base64_proto_id_.ShrinkToFit();
  }

  ConstRowReference operator[](uint32_t r) const {
    return ConstRowReference(this, r);
  }
  RowReference operator[](uint32_t r) { return RowReference(this, r); }
  ConstRowReference operator[](RowNumber r) const {
    return ConstRowReference(this, r.row_number());
  }
  RowReference operator[](RowNumber r) {
    return RowReference(this, r.row_number());
  }

  std::optional<ConstRowReference> FindById(Id find_id) const {
    std::optional<uint32_t> row = id().IndexOf(find_id);
    return row ? std::make_optional(ConstRowReference(this, *row))
               : std::nullopt;
  }

  std::optional<RowReference> FindById(Id find_id) {
    std::optional<uint32_t> row = id().IndexOf(find_id);
    return row ? std::make_optional(RowReference(this, *row)) : std::nullopt;
  }

  IdAndRow Insert(const Row& row) {
    uint32_t row_number = row_count();
    Id id = Id{row_number};
    mutable_ts()->Append(row.ts);
    mutable_arg_set_id()->Append(row.arg_set_id);
    mutable_base64_proto_id()->Append(row.base64_proto_id);
    UpdateSelfOverlayAfterInsert();
    return IdAndRow{id, row_number, RowReference(this, row_number),
                     RowNumber(row_number)};
  }

  

  const IdColumn<InputMethodClientsTable::Id>& id() const {
    return static_cast<const ColumnType::id&>(columns()[ColumnIndex::id]);
  }
  const TypedColumn<int64_t>& ts() const {
    return static_cast<const ColumnType::ts&>(columns()[ColumnIndex::ts]);
  }
  const TypedColumn<std::optional<uint32_t>>& arg_set_id() const {
    return static_cast<const ColumnType::arg_set_id&>(columns()[ColumnIndex::arg_set_id]);
  }
  const TypedColumn<std::optional<uint32_t>>& base64_proto_id() const {
    return static_cast<const ColumnType::base64_proto_id&>(columns()[ColumnIndex::base64_proto_id]);
  }

  TypedColumn<int64_t>* mutable_ts() {
    return static_cast<ColumnType::ts*>(
        GetColumn(ColumnIndex::ts));
  }
  TypedColumn<std::optional<uint32_t>>* mutable_arg_set_id() {
    return static_cast<ColumnType::arg_set_id*>(
        GetColumn(ColumnIndex::arg_set_id));
  }
  TypedColumn<std::optional<uint32_t>>* mutable_base64_proto_id() {
    return static_cast<ColumnType::base64_proto_id*>(
        GetColumn(ColumnIndex::base64_proto_id));
  }

 private:
  
  
  ColumnStorage<ColumnType::ts::stored_type> ts_;
  ColumnStorage<ColumnType::arg_set_id::stored_type> arg_set_id_;
  ColumnStorage<ColumnType::base64_proto_id::stored_type> base64_proto_id_;

  RefPtr<column::StorageLayer> id_storage_layer_;
  RefPtr<column::StorageLayer> ts_storage_layer_;
  RefPtr<column::StorageLayer> arg_set_id_storage_layer_;
  RefPtr<column::StorageLayer> base64_proto_id_storage_layer_;

  RefPtr<column::OverlayLayer> arg_set_id_null_layer_;
  RefPtr<column::OverlayLayer> base64_proto_id_null_layer_;
};
  

class InputMethodManagerServiceTable : public macros_internal::MacroTable {
 public:
  static constexpr uint32_t kColumnCount = 4;

  struct Id : public BaseId {
    Id() = default;
    explicit constexpr Id(uint32_t v) : BaseId(v) {}
  };
  static_assert(std::is_trivially_destructible_v<Id>,
                "Inheritance used without trivial destruction");
    
  struct ColumnIndex {
    static constexpr uint32_t id = 0;
    static constexpr uint32_t ts = 1;
    static constexpr uint32_t arg_set_id = 2;
    static constexpr uint32_t base64_proto_id = 3;
  };
  struct ColumnType {
    using id = IdColumn<InputMethodManagerServiceTable::Id>;
    using ts = TypedColumn<int64_t>;
    using arg_set_id = TypedColumn<std::optional<uint32_t>>;
    using base64_proto_id = TypedColumn<std::optional<uint32_t>>;
  };
  struct Row : public macros_internal::RootParentTable::Row {
    Row(int64_t in_ts = {},
        std::optional<uint32_t> in_arg_set_id = {},
        std::optional<uint32_t> in_base64_proto_id = {},
        std::nullptr_t = nullptr)
        : macros_internal::RootParentTable::Row(),
          ts(in_ts),
          arg_set_id(in_arg_set_id),
          base64_proto_id(in_base64_proto_id) {}
    int64_t ts;
    std::optional<uint32_t> arg_set_id;
    std::optional<uint32_t> base64_proto_id;

    bool operator==(const InputMethodManagerServiceTable::Row& other) const {
      return ColumnType::ts::Equals(ts, other.ts) &&
       ColumnType::arg_set_id::Equals(arg_set_id, other.arg_set_id) &&
       ColumnType::base64_proto_id::Equals(base64_proto_id, other.base64_proto_id);
    }
  };
  struct ColumnFlag {
    static constexpr uint32_t ts = static_cast<uint32_t>(ColumnLegacy::Flag::kSorted) | ColumnType::ts::default_flags();
    static constexpr uint32_t arg_set_id = ColumnType::arg_set_id::default_flags();
    static constexpr uint32_t base64_proto_id = ColumnType::base64_proto_id::default_flags();
  };

  class RowNumber;
  class ConstRowReference;
  class RowReference;

  class RowNumber : public macros_internal::AbstractRowNumber<
      InputMethodManagerServiceTable, ConstRowReference, RowReference> {
   public:
    explicit RowNumber(uint32_t row_number)
        : AbstractRowNumber(row_number) {}
  };
  static_assert(std::is_trivially_destructible_v<RowNumber>,
                "Inheritance used without trivial destruction");

  class ConstRowReference : public macros_internal::AbstractConstRowReference<
    InputMethodManagerServiceTable, RowNumber> {
   public:
    ConstRowReference(const InputMethodManagerServiceTable* table, uint32_t row_number)
        : AbstractConstRowReference(table, row_number) {}

    ColumnType::id::type id() const {
      return table()->id()[row_number_];
    }
    ColumnType::ts::type ts() const {
      return table()->ts()[row_number_];
    }
    ColumnType::arg_set_id::type arg_set_id() const {
      return table()->arg_set_id()[row_number_];
    }
    ColumnType::base64_proto_id::type base64_proto_id() const {
      return table()->base64_proto_id()[row_number_];
    }
  };
  static_assert(std::is_trivially_destructible_v<ConstRowReference>,
                "Inheritance used without trivial destruction");
  class RowReference : public ConstRowReference {
   public:
    RowReference(const InputMethodManagerServiceTable* table, uint32_t row_number)
        : ConstRowReference(table, row_number) {}

    void set_ts(
        ColumnType::ts::non_optional_type v) {
      return mutable_table()->mutable_ts()->Set(row_number_, v);
    }
    void set_arg_set_id(
        ColumnType::arg_set_id::non_optional_type v) {
      return mutable_table()->mutable_arg_set_id()->Set(row_number_, v);
    }
    void set_base64_proto_id(
        ColumnType::base64_proto_id::non_optional_type v) {
      return mutable_table()->mutable_base64_proto_id()->Set(row_number_, v);
    }

   private:
    InputMethodManagerServiceTable* mutable_table() const {
      return const_cast<InputMethodManagerServiceTable*>(table());
    }
  };
  static_assert(std::is_trivially_destructible_v<RowReference>,
                "Inheritance used without trivial destruction");

  class ConstIterator;
  class ConstIterator : public macros_internal::AbstractConstIterator<
    ConstIterator, InputMethodManagerServiceTable, RowNumber, ConstRowReference> {
   public:
    ColumnType::id::type id() const {
      const auto& col = table()->id();
      return col.GetAtIdx(
        iterator_.StorageIndexForColumn(col.index_in_table()));
    }
    ColumnType::ts::type ts() const {
      const auto& col = table()->ts();
      return col.GetAtIdx(
        iterator_.StorageIndexForColumn(col.index_in_table()));
    }
    ColumnType::arg_set_id::type arg_set_id() const {
      const auto& col = table()->arg_set_id();
      return col.GetAtIdx(
        iterator_.StorageIndexForColumn(col.index_in_table()));
    }
    ColumnType::base64_proto_id::type base64_proto_id() const {
      const auto& col = table()->base64_proto_id();
      return col.GetAtIdx(
        iterator_.StorageIndexForColumn(col.index_in_table()));
    }

   protected:
    explicit ConstIterator(const InputMethodManagerServiceTable* table,
                           Table::Iterator iterator)
        : AbstractConstIterator(table, std::move(iterator)) {}

    uint32_t CurrentRowNumber() const {
      return iterator_.StorageIndexForLastOverlay();
    }

   private:
    friend class InputMethodManagerServiceTable;
    friend class macros_internal::AbstractConstIterator<
      ConstIterator, InputMethodManagerServiceTable, RowNumber, ConstRowReference>;
  };
  class Iterator : public ConstIterator {
    public:
     RowReference row_reference() const {
       return {const_cast<InputMethodManagerServiceTable*>(table()), CurrentRowNumber()};
     }

    private:
     friend class InputMethodManagerServiceTable;

     explicit Iterator(InputMethodManagerServiceTable* table, Table::Iterator iterator)
        : ConstIterator(table, std::move(iterator)) {}
  };

  struct IdAndRow {
    Id id;
    uint32_t row;
    RowReference row_reference;
    RowNumber row_number;
  };

  static std::vector<ColumnLegacy> GetColumns(
      InputMethodManagerServiceTable* self,
      const macros_internal::MacroTable* parent) {
    std::vector<ColumnLegacy> columns =
        CopyColumnsFromParentOrAddRootColumns(parent);
    uint32_t olay_idx = OverlayCount(parent);
    AddColumnToVector(columns, "ts", &self->ts_, ColumnFlag::ts,
                      static_cast<uint32_t>(columns.size()), olay_idx);
    AddColumnToVector(columns, "arg_set_id", &self->arg_set_id_, ColumnFlag::arg_set_id,
                      static_cast<uint32_t>(columns.size()), olay_idx);
    AddColumnToVector(columns, "base64_proto_id", &self->base64_proto_id_, ColumnFlag::base64_proto_id,
                      static_cast<uint32_t>(columns.size()), olay_idx);
    base::ignore_result(self);
    return columns;
  }

  PERFETTO_NO_INLINE explicit InputMethodManagerServiceTable(StringPool* pool)
      : macros_internal::MacroTable(
          pool,
          GetColumns(this, nullptr),
          nullptr),
        ts_(ColumnStorage<ColumnType::ts::stored_type>::Create<false>()),
        arg_set_id_(ColumnStorage<ColumnType::arg_set_id::stored_type>::Create<false>()),
        base64_proto_id_(ColumnStorage<ColumnType::base64_proto_id::stored_type>::Create<false>())
,
        id_storage_layer_(new column::IdStorage()),
        ts_storage_layer_(
        new column::NumericStorage<ColumnType::ts::non_optional_stored_type>(
          &ts_.vector(),
          ColumnTypeHelper<ColumnType::ts::stored_type>::ToColumnType(),
          true)),
        arg_set_id_storage_layer_(
          new column::NumericStorage<ColumnType::arg_set_id::non_optional_stored_type>(
            &arg_set_id_.non_null_vector(),
            ColumnTypeHelper<ColumnType::arg_set_id::stored_type>::ToColumnType(),
            false)),
        base64_proto_id_storage_layer_(
          new column::NumericStorage<ColumnType::base64_proto_id::non_optional_stored_type>(
            &base64_proto_id_.non_null_vector(),
            ColumnTypeHelper<ColumnType::base64_proto_id::stored_type>::ToColumnType(),
            false))
,
        arg_set_id_null_layer_(new column::NullOverlay(arg_set_id_.bv())),
        base64_proto_id_null_layer_(new column::NullOverlay(base64_proto_id_.bv())) {
    static_assert(
        ColumnLegacy::IsFlagsAndTypeValid<ColumnType::ts::stored_type>(
          ColumnFlag::ts),
        "Column type and flag combination is not valid");
      static_assert(
        ColumnLegacy::IsFlagsAndTypeValid<ColumnType::arg_set_id::stored_type>(
          ColumnFlag::arg_set_id),
        "Column type and flag combination is not valid");
      static_assert(
        ColumnLegacy::IsFlagsAndTypeValid<ColumnType::base64_proto_id::stored_type>(
          ColumnFlag::base64_proto_id),
        "Column type and flag combination is not valid");
    OnConstructionCompletedRegularConstructor(
      {id_storage_layer_,ts_storage_layer_,arg_set_id_storage_layer_,base64_proto_id_storage_layer_},
      {{},{},arg_set_id_null_layer_,base64_proto_id_null_layer_});
  }
  ~InputMethodManagerServiceTable() override;

  static const char* Name() { return "__intrinsic_inputmethod_manager_service"; }

  static Table::Schema ComputeStaticSchema() {
    Table::Schema schema;
    schema.columns.emplace_back(Table::Schema::Column{
        "id", SqlValue::Type::kLong, true, true, false, false});
    schema.columns.emplace_back(Table::Schema::Column{
        "ts", ColumnType::ts::SqlValueType(), false,
        true,
        false,
        false});
    schema.columns.emplace_back(Table::Schema::Column{
        "arg_set_id", ColumnType::arg_set_id::SqlValueType(), false,
        false,
        false,
        false});
    schema.columns.emplace_back(Table::Schema::Column{
        "base64_proto_id", ColumnType::base64_proto_id::SqlValueType(), false,
        false,
        false,
        false});
    return schema;
  }

  ConstIterator IterateRows() const {
    return ConstIterator(this, Table::IterateRows());
  }

  Iterator IterateRows() { return Iterator(this, Table::IterateRows()); }

  ConstIterator FilterToIterator(const Query& q) const {
    return ConstIterator(this, QueryToIterator(q));
  }

  Iterator FilterToIterator(const Query& q) {
    return Iterator(this, QueryToIterator(q));
  }

  void ShrinkToFit() {
    ts_.ShrinkToFit();
    arg_set_id_.ShrinkToFit();
    base64_proto_id_.ShrinkToFit();
  }

  ConstRowReference operator[](uint32_t r) const {
    return ConstRowReference(this, r);
  }
  RowReference operator[](uint32_t r) { return RowReference(this, r); }
  ConstRowReference operator[](RowNumber r) const {
    return ConstRowReference(this, r.row_number());
  }
  RowReference operator[](RowNumber r) {
    return RowReference(this, r.row_number());
  }

  std::optional<ConstRowReference> FindById(Id find_id) const {
    std::optional<uint32_t> row = id().IndexOf(find_id);
    return row ? std::make_optional(ConstRowReference(this, *row))
               : std::nullopt;
  }

  std::optional<RowReference> FindById(Id find_id) {
    std::optional<uint32_t> row = id().IndexOf(find_id);
    return row ? std::make_optional(RowReference(this, *row)) : std::nullopt;
  }

  IdAndRow Insert(const Row& row) {
    uint32_t row_number = row_count();
    Id id = Id{row_number};
    mutable_ts()->Append(row.ts);
    mutable_arg_set_id()->Append(row.arg_set_id);
    mutable_base64_proto_id()->Append(row.base64_proto_id);
    UpdateSelfOverlayAfterInsert();
    return IdAndRow{id, row_number, RowReference(this, row_number),
                     RowNumber(row_number)};
  }

  

  const IdColumn<InputMethodManagerServiceTable::Id>& id() const {
    return static_cast<const ColumnType::id&>(columns()[ColumnIndex::id]);
  }
  const TypedColumn<int64_t>& ts() const {
    return static_cast<const ColumnType::ts&>(columns()[ColumnIndex::ts]);
  }
  const TypedColumn<std::optional<uint32_t>>& arg_set_id() const {
    return static_cast<const ColumnType::arg_set_id&>(columns()[ColumnIndex::arg_set_id]);
  }
  const TypedColumn<std::optional<uint32_t>>& base64_proto_id() const {
    return static_cast<const ColumnType::base64_proto_id&>(columns()[ColumnIndex::base64_proto_id]);
  }

  TypedColumn<int64_t>* mutable_ts() {
    return static_cast<ColumnType::ts*>(
        GetColumn(ColumnIndex::ts));
  }
  TypedColumn<std::optional<uint32_t>>* mutable_arg_set_id() {
    return static_cast<ColumnType::arg_set_id*>(
        GetColumn(ColumnIndex::arg_set_id));
  }
  TypedColumn<std::optional<uint32_t>>* mutable_base64_proto_id() {
    return static_cast<ColumnType::base64_proto_id*>(
        GetColumn(ColumnIndex::base64_proto_id));
  }

 private:
  
  
  ColumnStorage<ColumnType::ts::stored_type> ts_;
  ColumnStorage<ColumnType::arg_set_id::stored_type> arg_set_id_;
  ColumnStorage<ColumnType::base64_proto_id::stored_type> base64_proto_id_;

  RefPtr<column::StorageLayer> id_storage_layer_;
  RefPtr<column::StorageLayer> ts_storage_layer_;
  RefPtr<column::StorageLayer> arg_set_id_storage_layer_;
  RefPtr<column::StorageLayer> base64_proto_id_storage_layer_;

  RefPtr<column::OverlayLayer> arg_set_id_null_layer_;
  RefPtr<column::OverlayLayer> base64_proto_id_null_layer_;
};
  

class InputMethodServiceTable : public macros_internal::MacroTable {
 public:
  static constexpr uint32_t kColumnCount = 4;

  struct Id : public BaseId {
    Id() = default;
    explicit constexpr Id(uint32_t v) : BaseId(v) {}
  };
  static_assert(std::is_trivially_destructible_v<Id>,
                "Inheritance used without trivial destruction");
    
  struct ColumnIndex {
    static constexpr uint32_t id = 0;
    static constexpr uint32_t ts = 1;
    static constexpr uint32_t arg_set_id = 2;
    static constexpr uint32_t base64_proto_id = 3;
  };
  struct ColumnType {
    using id = IdColumn<InputMethodServiceTable::Id>;
    using ts = TypedColumn<int64_t>;
    using arg_set_id = TypedColumn<std::optional<uint32_t>>;
    using base64_proto_id = TypedColumn<std::optional<uint32_t>>;
  };
  struct Row : public macros_internal::RootParentTable::Row {
    Row(int64_t in_ts = {},
        std::optional<uint32_t> in_arg_set_id = {},
        std::optional<uint32_t> in_base64_proto_id = {},
        std::nullptr_t = nullptr)
        : macros_internal::RootParentTable::Row(),
          ts(in_ts),
          arg_set_id(in_arg_set_id),
          base64_proto_id(in_base64_proto_id) {}
    int64_t ts;
    std::optional<uint32_t> arg_set_id;
    std::optional<uint32_t> base64_proto_id;

    bool operator==(const InputMethodServiceTable::Row& other) const {
      return ColumnType::ts::Equals(ts, other.ts) &&
       ColumnType::arg_set_id::Equals(arg_set_id, other.arg_set_id) &&
       ColumnType::base64_proto_id::Equals(base64_proto_id, other.base64_proto_id);
    }
  };
  struct ColumnFlag {
    static constexpr uint32_t ts = static_cast<uint32_t>(ColumnLegacy::Flag::kSorted) | ColumnType::ts::default_flags();
    static constexpr uint32_t arg_set_id = ColumnType::arg_set_id::default_flags();
    static constexpr uint32_t base64_proto_id = ColumnType::base64_proto_id::default_flags();
  };

  class RowNumber;
  class ConstRowReference;
  class RowReference;

  class RowNumber : public macros_internal::AbstractRowNumber<
      InputMethodServiceTable, ConstRowReference, RowReference> {
   public:
    explicit RowNumber(uint32_t row_number)
        : AbstractRowNumber(row_number) {}
  };
  static_assert(std::is_trivially_destructible_v<RowNumber>,
                "Inheritance used without trivial destruction");

  class ConstRowReference : public macros_internal::AbstractConstRowReference<
    InputMethodServiceTable, RowNumber> {
   public:
    ConstRowReference(const InputMethodServiceTable* table, uint32_t row_number)
        : AbstractConstRowReference(table, row_number) {}

    ColumnType::id::type id() const {
      return table()->id()[row_number_];
    }
    ColumnType::ts::type ts() const {
      return table()->ts()[row_number_];
    }
    ColumnType::arg_set_id::type arg_set_id() const {
      return table()->arg_set_id()[row_number_];
    }
    ColumnType::base64_proto_id::type base64_proto_id() const {
      return table()->base64_proto_id()[row_number_];
    }
  };
  static_assert(std::is_trivially_destructible_v<ConstRowReference>,
                "Inheritance used without trivial destruction");
  class RowReference : public ConstRowReference {
   public:
    RowReference(const InputMethodServiceTable* table, uint32_t row_number)
        : ConstRowReference(table, row_number) {}

    void set_ts(
        ColumnType::ts::non_optional_type v) {
      return mutable_table()->mutable_ts()->Set(row_number_, v);
    }
    void set_arg_set_id(
        ColumnType::arg_set_id::non_optional_type v) {
      return mutable_table()->mutable_arg_set_id()->Set(row_number_, v);
    }
    void set_base64_proto_id(
        ColumnType::base64_proto_id::non_optional_type v) {
      return mutable_table()->mutable_base64_proto_id()->Set(row_number_, v);
    }

   private:
    InputMethodServiceTable* mutable_table() const {
      return const_cast<InputMethodServiceTable*>(table());
    }
  };
  static_assert(std::is_trivially_destructible_v<RowReference>,
                "Inheritance used without trivial destruction");

  class ConstIterator;
  class ConstIterator : public macros_internal::AbstractConstIterator<
    ConstIterator, InputMethodServiceTable, RowNumber, ConstRowReference> {
   public:
    ColumnType::id::type id() const {
      const auto& col = table()->id();
      return col.GetAtIdx(
        iterator_.StorageIndexForColumn(col.index_in_table()));
    }
    ColumnType::ts::type ts() const {
      const auto& col = table()->ts();
      return col.GetAtIdx(
        iterator_.StorageIndexForColumn(col.index_in_table()));
    }
    ColumnType::arg_set_id::type arg_set_id() const {
      const auto& col = table()->arg_set_id();
      return col.GetAtIdx(
        iterator_.StorageIndexForColumn(col.index_in_table()));
    }
    ColumnType::base64_proto_id::type base64_proto_id() const {
      const auto& col = table()->base64_proto_id();
      return col.GetAtIdx(
        iterator_.StorageIndexForColumn(col.index_in_table()));
    }

   protected:
    explicit ConstIterator(const InputMethodServiceTable* table,
                           Table::Iterator iterator)
        : AbstractConstIterator(table, std::move(iterator)) {}

    uint32_t CurrentRowNumber() const {
      return iterator_.StorageIndexForLastOverlay();
    }

   private:
    friend class InputMethodServiceTable;
    friend class macros_internal::AbstractConstIterator<
      ConstIterator, InputMethodServiceTable, RowNumber, ConstRowReference>;
  };
  class Iterator : public ConstIterator {
    public:
     RowReference row_reference() const {
       return {const_cast<InputMethodServiceTable*>(table()), CurrentRowNumber()};
     }

    private:
     friend class InputMethodServiceTable;

     explicit Iterator(InputMethodServiceTable* table, Table::Iterator iterator)
        : ConstIterator(table, std::move(iterator)) {}
  };

  struct IdAndRow {
    Id id;
    uint32_t row;
    RowReference row_reference;
    RowNumber row_number;
  };

  static std::vector<ColumnLegacy> GetColumns(
      InputMethodServiceTable* self,
      const macros_internal::MacroTable* parent) {
    std::vector<ColumnLegacy> columns =
        CopyColumnsFromParentOrAddRootColumns(parent);
    uint32_t olay_idx = OverlayCount(parent);
    AddColumnToVector(columns, "ts", &self->ts_, ColumnFlag::ts,
                      static_cast<uint32_t>(columns.size()), olay_idx);
    AddColumnToVector(columns, "arg_set_id", &self->arg_set_id_, ColumnFlag::arg_set_id,
                      static_cast<uint32_t>(columns.size()), olay_idx);
    AddColumnToVector(columns, "base64_proto_id", &self->base64_proto_id_, ColumnFlag::base64_proto_id,
                      static_cast<uint32_t>(columns.size()), olay_idx);
    base::ignore_result(self);
    return columns;
  }

  PERFETTO_NO_INLINE explicit InputMethodServiceTable(StringPool* pool)
      : macros_internal::MacroTable(
          pool,
          GetColumns(this, nullptr),
          nullptr),
        ts_(ColumnStorage<ColumnType::ts::stored_type>::Create<false>()),
        arg_set_id_(ColumnStorage<ColumnType::arg_set_id::stored_type>::Create<false>()),
        base64_proto_id_(ColumnStorage<ColumnType::base64_proto_id::stored_type>::Create<false>())
,
        id_storage_layer_(new column::IdStorage()),
        ts_storage_layer_(
        new column::NumericStorage<ColumnType::ts::non_optional_stored_type>(
          &ts_.vector(),
          ColumnTypeHelper<ColumnType::ts::stored_type>::ToColumnType(),
          true)),
        arg_set_id_storage_layer_(
          new column::NumericStorage<ColumnType::arg_set_id::non_optional_stored_type>(
            &arg_set_id_.non_null_vector(),
            ColumnTypeHelper<ColumnType::arg_set_id::stored_type>::ToColumnType(),
            false)),
        base64_proto_id_storage_layer_(
          new column::NumericStorage<ColumnType::base64_proto_id::non_optional_stored_type>(
            &base64_proto_id_.non_null_vector(),
            ColumnTypeHelper<ColumnType::base64_proto_id::stored_type>::ToColumnType(),
            false))
,
        arg_set_id_null_layer_(new column::NullOverlay(arg_set_id_.bv())),
        base64_proto_id_null_layer_(new column::NullOverlay(base64_proto_id_.bv())) {
    static_assert(
        ColumnLegacy::IsFlagsAndTypeValid<ColumnType::ts::stored_type>(
          ColumnFlag::ts),
        "Column type and flag combination is not valid");
      static_assert(
        ColumnLegacy::IsFlagsAndTypeValid<ColumnType::arg_set_id::stored_type>(
          ColumnFlag::arg_set_id),
        "Column type and flag combination is not valid");
      static_assert(
        ColumnLegacy::IsFlagsAndTypeValid<ColumnType::base64_proto_id::stored_type>(
          ColumnFlag::base64_proto_id),
        "Column type and flag combination is not valid");
    OnConstructionCompletedRegularConstructor(
      {id_storage_layer_,ts_storage_layer_,arg_set_id_storage_layer_,base64_proto_id_storage_layer_},
      {{},{},arg_set_id_null_layer_,base64_proto_id_null_layer_});
  }
  ~InputMethodServiceTable() override;

  static const char* Name() { return "__intrinsic_inputmethod_service"; }

  static Table::Schema ComputeStaticSchema() {
    Table::Schema schema;
    schema.columns.emplace_back(Table::Schema::Column{
        "id", SqlValue::Type::kLong, true, true, false, false});
    schema.columns.emplace_back(Table::Schema::Column{
        "ts", ColumnType::ts::SqlValueType(), false,
        true,
        false,
        false});
    schema.columns.emplace_back(Table::Schema::Column{
        "arg_set_id", ColumnType::arg_set_id::SqlValueType(), false,
        false,
        false,
        false});
    schema.columns.emplace_back(Table::Schema::Column{
        "base64_proto_id", ColumnType::base64_proto_id::SqlValueType(), false,
        false,
        false,
        false});
    return schema;
  }

  ConstIterator IterateRows() const {
    return ConstIterator(this, Table::IterateRows());
  }

  Iterator IterateRows() { return Iterator(this, Table::IterateRows()); }

  ConstIterator FilterToIterator(const Query& q) const {
    return ConstIterator(this, QueryToIterator(q));
  }

  Iterator FilterToIterator(const Query& q) {
    return Iterator(this, QueryToIterator(q));
  }

  void ShrinkToFit() {
    ts_.ShrinkToFit();
    arg_set_id_.ShrinkToFit();
    base64_proto_id_.ShrinkToFit();
  }

  ConstRowReference operator[](uint32_t r) const {
    return ConstRowReference(this, r);
  }
  RowReference operator[](uint32_t r) { return RowReference(this, r); }
  ConstRowReference operator[](RowNumber r) const {
    return ConstRowReference(this, r.row_number());
  }
  RowReference operator[](RowNumber r) {
    return RowReference(this, r.row_number());
  }

  std::optional<ConstRowReference> FindById(Id find_id) const {
    std::optional<uint32_t> row = id().IndexOf(find_id);
    return row ? std::make_optional(ConstRowReference(this, *row))
               : std::nullopt;
  }

  std::optional<RowReference> FindById(Id find_id) {
    std::optional<uint32_t> row = id().IndexOf(find_id);
    return row ? std::make_optional(RowReference(this, *row)) : std::nullopt;
  }

  IdAndRow Insert(const Row& row) {
    uint32_t row_number = row_count();
    Id id = Id{row_number};
    mutable_ts()->Append(row.ts);
    mutable_arg_set_id()->Append(row.arg_set_id);
    mutable_base64_proto_id()->Append(row.base64_proto_id);
    UpdateSelfOverlayAfterInsert();
    return IdAndRow{id, row_number, RowReference(this, row_number),
                     RowNumber(row_number)};
  }

  

  const IdColumn<InputMethodServiceTable::Id>& id() const {
    return static_cast<const ColumnType::id&>(columns()[ColumnIndex::id]);
  }
  const TypedColumn<int64_t>& ts() const {
    return static_cast<const ColumnType::ts&>(columns()[ColumnIndex::ts]);
  }
  const TypedColumn<std::optional<uint32_t>>& arg_set_id() const {
    return static_cast<const ColumnType::arg_set_id&>(columns()[ColumnIndex::arg_set_id]);
  }
  const TypedColumn<std::optional<uint32_t>>& base64_proto_id() const {
    return static_cast<const ColumnType::base64_proto_id&>(columns()[ColumnIndex::base64_proto_id]);
  }

  TypedColumn<int64_t>* mutable_ts() {
    return static_cast<ColumnType::ts*>(
        GetColumn(ColumnIndex::ts));
  }
  TypedColumn<std::optional<uint32_t>>* mutable_arg_set_id() {
    return static_cast<ColumnType::arg_set_id*>(
        GetColumn(ColumnIndex::arg_set_id));
  }
  TypedColumn<std::optional<uint32_t>>* mutable_base64_proto_id() {
    return static_cast<ColumnType::base64_proto_id*>(
        GetColumn(ColumnIndex::base64_proto_id));
  }

 private:
  
  
  ColumnStorage<ColumnType::ts::stored_type> ts_;
  ColumnStorage<ColumnType::arg_set_id::stored_type> arg_set_id_;
  ColumnStorage<ColumnType::base64_proto_id::stored_type> base64_proto_id_;

  RefPtr<column::StorageLayer> id_storage_layer_;
  RefPtr<column::StorageLayer> ts_storage_layer_;
  RefPtr<column::StorageLayer> arg_set_id_storage_layer_;
  RefPtr<column::StorageLayer> base64_proto_id_storage_layer_;

  RefPtr<column::OverlayLayer> arg_set_id_null_layer_;
  RefPtr<column::OverlayLayer> base64_proto_id_null_layer_;
};
  

class SurfaceFlingerLayersSnapshotTable : public macros_internal::MacroTable {
 public:
  static constexpr uint32_t kColumnCount = 4;

  struct Id : public BaseId {
    Id() = default;
    explicit constexpr Id(uint32_t v) : BaseId(v) {}
  };
  static_assert(std::is_trivially_destructible_v<Id>,
                "Inheritance used without trivial destruction");
    
  struct ColumnIndex {
    static constexpr uint32_t id = 0;
    static constexpr uint32_t ts = 1;
    static constexpr uint32_t arg_set_id = 2;
    static constexpr uint32_t base64_proto_id = 3;
  };
  struct ColumnType {
    using id = IdColumn<SurfaceFlingerLayersSnapshotTable::Id>;
    using ts = TypedColumn<int64_t>;
    using arg_set_id = TypedColumn<std::optional<uint32_t>>;
    using base64_proto_id = TypedColumn<std::optional<uint32_t>>;
  };
  struct Row : public macros_internal::RootParentTable::Row {
    Row(int64_t in_ts = {},
        std::optional<uint32_t> in_arg_set_id = {},
        std::optional<uint32_t> in_base64_proto_id = {},
        std::nullptr_t = nullptr)
        : macros_internal::RootParentTable::Row(),
          ts(in_ts),
          arg_set_id(in_arg_set_id),
          base64_proto_id(in_base64_proto_id) {}
    int64_t ts;
    std::optional<uint32_t> arg_set_id;
    std::optional<uint32_t> base64_proto_id;

    bool operator==(const SurfaceFlingerLayersSnapshotTable::Row& other) const {
      return ColumnType::ts::Equals(ts, other.ts) &&
       ColumnType::arg_set_id::Equals(arg_set_id, other.arg_set_id) &&
       ColumnType::base64_proto_id::Equals(base64_proto_id, other.base64_proto_id);
    }
  };
  struct ColumnFlag {
    static constexpr uint32_t ts = static_cast<uint32_t>(ColumnLegacy::Flag::kSorted) | ColumnType::ts::default_flags();
    static constexpr uint32_t arg_set_id = ColumnType::arg_set_id::default_flags();
    static constexpr uint32_t base64_proto_id = ColumnType::base64_proto_id::default_flags();
  };

  class RowNumber;
  class ConstRowReference;
  class RowReference;

  class RowNumber : public macros_internal::AbstractRowNumber<
      SurfaceFlingerLayersSnapshotTable, ConstRowReference, RowReference> {
   public:
    explicit RowNumber(uint32_t row_number)
        : AbstractRowNumber(row_number) {}
  };
  static_assert(std::is_trivially_destructible_v<RowNumber>,
                "Inheritance used without trivial destruction");

  class ConstRowReference : public macros_internal::AbstractConstRowReference<
    SurfaceFlingerLayersSnapshotTable, RowNumber> {
   public:
    ConstRowReference(const SurfaceFlingerLayersSnapshotTable* table, uint32_t row_number)
        : AbstractConstRowReference(table, row_number) {}

    ColumnType::id::type id() const {
      return table()->id()[row_number_];
    }
    ColumnType::ts::type ts() const {
      return table()->ts()[row_number_];
    }
    ColumnType::arg_set_id::type arg_set_id() const {
      return table()->arg_set_id()[row_number_];
    }
    ColumnType::base64_proto_id::type base64_proto_id() const {
      return table()->base64_proto_id()[row_number_];
    }
  };
  static_assert(std::is_trivially_destructible_v<ConstRowReference>,
                "Inheritance used without trivial destruction");
  class RowReference : public ConstRowReference {
   public:
    RowReference(const SurfaceFlingerLayersSnapshotTable* table, uint32_t row_number)
        : ConstRowReference(table, row_number) {}

    void set_ts(
        ColumnType::ts::non_optional_type v) {
      return mutable_table()->mutable_ts()->Set(row_number_, v);
    }
    void set_arg_set_id(
        ColumnType::arg_set_id::non_optional_type v) {
      return mutable_table()->mutable_arg_set_id()->Set(row_number_, v);
    }
    void set_base64_proto_id(
        ColumnType::base64_proto_id::non_optional_type v) {
      return mutable_table()->mutable_base64_proto_id()->Set(row_number_, v);
    }

   private:
    SurfaceFlingerLayersSnapshotTable* mutable_table() const {
      return const_cast<SurfaceFlingerLayersSnapshotTable*>(table());
    }
  };
  static_assert(std::is_trivially_destructible_v<RowReference>,
                "Inheritance used without trivial destruction");

  class ConstIterator;
  class ConstIterator : public macros_internal::AbstractConstIterator<
    ConstIterator, SurfaceFlingerLayersSnapshotTable, RowNumber, ConstRowReference> {
   public:
    ColumnType::id::type id() const {
      const auto& col = table()->id();
      return col.GetAtIdx(
        iterator_.StorageIndexForColumn(col.index_in_table()));
    }
    ColumnType::ts::type ts() const {
      const auto& col = table()->ts();
      return col.GetAtIdx(
        iterator_.StorageIndexForColumn(col.index_in_table()));
    }
    ColumnType::arg_set_id::type arg_set_id() const {
      const auto& col = table()->arg_set_id();
      return col.GetAtIdx(
        iterator_.StorageIndexForColumn(col.index_in_table()));
    }
    ColumnType::base64_proto_id::type base64_proto_id() const {
      const auto& col = table()->base64_proto_id();
      return col.GetAtIdx(
        iterator_.StorageIndexForColumn(col.index_in_table()));
    }

   protected:
    explicit ConstIterator(const SurfaceFlingerLayersSnapshotTable* table,
                           Table::Iterator iterator)
        : AbstractConstIterator(table, std::move(iterator)) {}

    uint32_t CurrentRowNumber() const {
      return iterator_.StorageIndexForLastOverlay();
    }

   private:
    friend class SurfaceFlingerLayersSnapshotTable;
    friend class macros_internal::AbstractConstIterator<
      ConstIterator, SurfaceFlingerLayersSnapshotTable, RowNumber, ConstRowReference>;
  };
  class Iterator : public ConstIterator {
    public:
     RowReference row_reference() const {
       return {const_cast<SurfaceFlingerLayersSnapshotTable*>(table()), CurrentRowNumber()};
     }

    private:
     friend class SurfaceFlingerLayersSnapshotTable;

     explicit Iterator(SurfaceFlingerLayersSnapshotTable* table, Table::Iterator iterator)
        : ConstIterator(table, std::move(iterator)) {}
  };

  struct IdAndRow {
    Id id;
    uint32_t row;
    RowReference row_reference;
    RowNumber row_number;
  };

  static std::vector<ColumnLegacy> GetColumns(
      SurfaceFlingerLayersSnapshotTable* self,
      const macros_internal::MacroTable* parent) {
    std::vector<ColumnLegacy> columns =
        CopyColumnsFromParentOrAddRootColumns(parent);
    uint32_t olay_idx = OverlayCount(parent);
    AddColumnToVector(columns, "ts", &self->ts_, ColumnFlag::ts,
                      static_cast<uint32_t>(columns.size()), olay_idx);
    AddColumnToVector(columns, "arg_set_id", &self->arg_set_id_, ColumnFlag::arg_set_id,
                      static_cast<uint32_t>(columns.size()), olay_idx);
    AddColumnToVector(columns, "base64_proto_id", &self->base64_proto_id_, ColumnFlag::base64_proto_id,
                      static_cast<uint32_t>(columns.size()), olay_idx);
    base::ignore_result(self);
    return columns;
  }

  PERFETTO_NO_INLINE explicit SurfaceFlingerLayersSnapshotTable(StringPool* pool)
      : macros_internal::MacroTable(
          pool,
          GetColumns(this, nullptr),
          nullptr),
        ts_(ColumnStorage<ColumnType::ts::stored_type>::Create<false>()),
        arg_set_id_(ColumnStorage<ColumnType::arg_set_id::stored_type>::Create<false>()),
        base64_proto_id_(ColumnStorage<ColumnType::base64_proto_id::stored_type>::Create<false>())
,
        id_storage_layer_(new column::IdStorage()),
        ts_storage_layer_(
        new column::NumericStorage<ColumnType::ts::non_optional_stored_type>(
          &ts_.vector(),
          ColumnTypeHelper<ColumnType::ts::stored_type>::ToColumnType(),
          true)),
        arg_set_id_storage_layer_(
          new column::NumericStorage<ColumnType::arg_set_id::non_optional_stored_type>(
            &arg_set_id_.non_null_vector(),
            ColumnTypeHelper<ColumnType::arg_set_id::stored_type>::ToColumnType(),
            false)),
        base64_proto_id_storage_layer_(
          new column::NumericStorage<ColumnType::base64_proto_id::non_optional_stored_type>(
            &base64_proto_id_.non_null_vector(),
            ColumnTypeHelper<ColumnType::base64_proto_id::stored_type>::ToColumnType(),
            false))
,
        arg_set_id_null_layer_(new column::NullOverlay(arg_set_id_.bv())),
        base64_proto_id_null_layer_(new column::NullOverlay(base64_proto_id_.bv())) {
    static_assert(
        ColumnLegacy::IsFlagsAndTypeValid<ColumnType::ts::stored_type>(
          ColumnFlag::ts),
        "Column type and flag combination is not valid");
      static_assert(
        ColumnLegacy::IsFlagsAndTypeValid<ColumnType::arg_set_id::stored_type>(
          ColumnFlag::arg_set_id),
        "Column type and flag combination is not valid");
      static_assert(
        ColumnLegacy::IsFlagsAndTypeValid<ColumnType::base64_proto_id::stored_type>(
          ColumnFlag::base64_proto_id),
        "Column type and flag combination is not valid");
    OnConstructionCompletedRegularConstructor(
      {id_storage_layer_,ts_storage_layer_,arg_set_id_storage_layer_,base64_proto_id_storage_layer_},
      {{},{},arg_set_id_null_layer_,base64_proto_id_null_layer_});
  }
  ~SurfaceFlingerLayersSnapshotTable() override;

  static const char* Name() { return "surfaceflinger_layers_snapshot"; }

  static Table::Schema ComputeStaticSchema() {
    Table::Schema schema;
    schema.columns.emplace_back(Table::Schema::Column{
        "id", SqlValue::Type::kLong, true, true, false, false});
    schema.columns.emplace_back(Table::Schema::Column{
        "ts", ColumnType::ts::SqlValueType(), false,
        true,
        false,
        false});
    schema.columns.emplace_back(Table::Schema::Column{
        "arg_set_id", ColumnType::arg_set_id::SqlValueType(), false,
        false,
        false,
        false});
    schema.columns.emplace_back(Table::Schema::Column{
        "base64_proto_id", ColumnType::base64_proto_id::SqlValueType(), false,
        false,
        false,
        false});
    return schema;
  }

  ConstIterator IterateRows() const {
    return ConstIterator(this, Table::IterateRows());
  }

  Iterator IterateRows() { return Iterator(this, Table::IterateRows()); }

  ConstIterator FilterToIterator(const Query& q) const {
    return ConstIterator(this, QueryToIterator(q));
  }

  Iterator FilterToIterator(const Query& q) {
    return Iterator(this, QueryToIterator(q));
  }

  void ShrinkToFit() {
    ts_.ShrinkToFit();
    arg_set_id_.ShrinkToFit();
    base64_proto_id_.ShrinkToFit();
  }

  ConstRowReference operator[](uint32_t r) const {
    return ConstRowReference(this, r);
  }
  RowReference operator[](uint32_t r) { return RowReference(this, r); }
  ConstRowReference operator[](RowNumber r) const {
    return ConstRowReference(this, r.row_number());
  }
  RowReference operator[](RowNumber r) {
    return RowReference(this, r.row_number());
  }

  std::optional<ConstRowReference> FindById(Id find_id) const {
    std::optional<uint32_t> row = id().IndexOf(find_id);
    return row ? std::make_optional(ConstRowReference(this, *row))
               : std::nullopt;
  }

  std::optional<RowReference> FindById(Id find_id) {
    std::optional<uint32_t> row = id().IndexOf(find_id);
    return row ? std::make_optional(RowReference(this, *row)) : std::nullopt;
  }

  IdAndRow Insert(const Row& row) {
    uint32_t row_number = row_count();
    Id id = Id{row_number};
    mutable_ts()->Append(row.ts);
    mutable_arg_set_id()->Append(row.arg_set_id);
    mutable_base64_proto_id()->Append(row.base64_proto_id);
    UpdateSelfOverlayAfterInsert();
    return IdAndRow{id, row_number, RowReference(this, row_number),
                     RowNumber(row_number)};
  }

  

  const IdColumn<SurfaceFlingerLayersSnapshotTable::Id>& id() const {
    return static_cast<const ColumnType::id&>(columns()[ColumnIndex::id]);
  }
  const TypedColumn<int64_t>& ts() const {
    return static_cast<const ColumnType::ts&>(columns()[ColumnIndex::ts]);
  }
  const TypedColumn<std::optional<uint32_t>>& arg_set_id() const {
    return static_cast<const ColumnType::arg_set_id&>(columns()[ColumnIndex::arg_set_id]);
  }
  const TypedColumn<std::optional<uint32_t>>& base64_proto_id() const {
    return static_cast<const ColumnType::base64_proto_id&>(columns()[ColumnIndex::base64_proto_id]);
  }

  TypedColumn<int64_t>* mutable_ts() {
    return static_cast<ColumnType::ts*>(
        GetColumn(ColumnIndex::ts));
  }
  TypedColumn<std::optional<uint32_t>>* mutable_arg_set_id() {
    return static_cast<ColumnType::arg_set_id*>(
        GetColumn(ColumnIndex::arg_set_id));
  }
  TypedColumn<std::optional<uint32_t>>* mutable_base64_proto_id() {
    return static_cast<ColumnType::base64_proto_id*>(
        GetColumn(ColumnIndex::base64_proto_id));
  }

 private:
  
  
  ColumnStorage<ColumnType::ts::stored_type> ts_;
  ColumnStorage<ColumnType::arg_set_id::stored_type> arg_set_id_;
  ColumnStorage<ColumnType::base64_proto_id::stored_type> base64_proto_id_;

  RefPtr<column::StorageLayer> id_storage_layer_;
  RefPtr<column::StorageLayer> ts_storage_layer_;
  RefPtr<column::StorageLayer> arg_set_id_storage_layer_;
  RefPtr<column::StorageLayer> base64_proto_id_storage_layer_;

  RefPtr<column::OverlayLayer> arg_set_id_null_layer_;
  RefPtr<column::OverlayLayer> base64_proto_id_null_layer_;
};
  

class SurfaceFlingerLayerTable : public macros_internal::MacroTable {
 public:
  static constexpr uint32_t kColumnCount = 4;

  struct Id : public BaseId {
    Id() = default;
    explicit constexpr Id(uint32_t v) : BaseId(v) {}
  };
  static_assert(std::is_trivially_destructible_v<Id>,
                "Inheritance used without trivial destruction");
    
  struct ColumnIndex {
    static constexpr uint32_t id = 0;
    static constexpr uint32_t snapshot_id = 1;
    static constexpr uint32_t arg_set_id = 2;
    static constexpr uint32_t base64_proto_id = 3;
  };
  struct ColumnType {
    using id = IdColumn<SurfaceFlingerLayerTable::Id>;
    using snapshot_id = TypedColumn<SurfaceFlingerLayersSnapshotTable::Id>;
    using arg_set_id = TypedColumn<std::optional<uint32_t>>;
    using base64_proto_id = TypedColumn<std::optional<uint32_t>>;
  };
  struct Row : public macros_internal::RootParentTable::Row {
    Row(SurfaceFlingerLayersSnapshotTable::Id in_snapshot_id = {},
        std::optional<uint32_t> in_arg_set_id = {},
        std::optional<uint32_t> in_base64_proto_id = {},
        std::nullptr_t = nullptr)
        : macros_internal::RootParentTable::Row(),
          snapshot_id(in_snapshot_id),
          arg_set_id(in_arg_set_id),
          base64_proto_id(in_base64_proto_id) {}
    SurfaceFlingerLayersSnapshotTable::Id snapshot_id;
    std::optional<uint32_t> arg_set_id;
    std::optional<uint32_t> base64_proto_id;

    bool operator==(const SurfaceFlingerLayerTable::Row& other) const {
      return ColumnType::snapshot_id::Equals(snapshot_id, other.snapshot_id) &&
       ColumnType::arg_set_id::Equals(arg_set_id, other.arg_set_id) &&
       ColumnType::base64_proto_id::Equals(base64_proto_id, other.base64_proto_id);
    }
  };
  struct ColumnFlag {
    static constexpr uint32_t snapshot_id = ColumnType::snapshot_id::default_flags();
    static constexpr uint32_t arg_set_id = ColumnType::arg_set_id::default_flags();
    static constexpr uint32_t base64_proto_id = ColumnType::base64_proto_id::default_flags();
  };

  class RowNumber;
  class ConstRowReference;
  class RowReference;

  class RowNumber : public macros_internal::AbstractRowNumber<
      SurfaceFlingerLayerTable, ConstRowReference, RowReference> {
   public:
    explicit RowNumber(uint32_t row_number)
        : AbstractRowNumber(row_number) {}
  };
  static_assert(std::is_trivially_destructible_v<RowNumber>,
                "Inheritance used without trivial destruction");

  class ConstRowReference : public macros_internal::AbstractConstRowReference<
    SurfaceFlingerLayerTable, RowNumber> {
   public:
    ConstRowReference(const SurfaceFlingerLayerTable* table, uint32_t row_number)
        : AbstractConstRowReference(table, row_number) {}

    ColumnType::id::type id() const {
      return table()->id()[row_number_];
    }
    ColumnType::snapshot_id::type snapshot_id() const {
      return table()->snapshot_id()[row_number_];
    }
    ColumnType::arg_set_id::type arg_set_id() const {
      return table()->arg_set_id()[row_number_];
    }
    ColumnType::base64_proto_id::type base64_proto_id() const {
      return table()->base64_proto_id()[row_number_];
    }
  };
  static_assert(std::is_trivially_destructible_v<ConstRowReference>,
                "Inheritance used without trivial destruction");
  class RowReference : public ConstRowReference {
   public:
    RowReference(const SurfaceFlingerLayerTable* table, uint32_t row_number)
        : ConstRowReference(table, row_number) {}

    void set_snapshot_id(
        ColumnType::snapshot_id::non_optional_type v) {
      return mutable_table()->mutable_snapshot_id()->Set(row_number_, v);
    }
    void set_arg_set_id(
        ColumnType::arg_set_id::non_optional_type v) {
      return mutable_table()->mutable_arg_set_id()->Set(row_number_, v);
    }
    void set_base64_proto_id(
        ColumnType::base64_proto_id::non_optional_type v) {
      return mutable_table()->mutable_base64_proto_id()->Set(row_number_, v);
    }

   private:
    SurfaceFlingerLayerTable* mutable_table() const {
      return const_cast<SurfaceFlingerLayerTable*>(table());
    }
  };
  static_assert(std::is_trivially_destructible_v<RowReference>,
                "Inheritance used without trivial destruction");

  class ConstIterator;
  class ConstIterator : public macros_internal::AbstractConstIterator<
    ConstIterator, SurfaceFlingerLayerTable, RowNumber, ConstRowReference> {
   public:
    ColumnType::id::type id() const {
      const auto& col = table()->id();
      return col.GetAtIdx(
        iterator_.StorageIndexForColumn(col.index_in_table()));
    }
    ColumnType::snapshot_id::type snapshot_id() const {
      const auto& col = table()->snapshot_id();
      return col.GetAtIdx(
        iterator_.StorageIndexForColumn(col.index_in_table()));
    }
    ColumnType::arg_set_id::type arg_set_id() const {
      const auto& col = table()->arg_set_id();
      return col.GetAtIdx(
        iterator_.StorageIndexForColumn(col.index_in_table()));
    }
    ColumnType::base64_proto_id::type base64_proto_id() const {
      const auto& col = table()->base64_proto_id();
      return col.GetAtIdx(
        iterator_.StorageIndexForColumn(col.index_in_table()));
    }

   protected:
    explicit ConstIterator(const SurfaceFlingerLayerTable* table,
                           Table::Iterator iterator)
        : AbstractConstIterator(table, std::move(iterator)) {}

    uint32_t CurrentRowNumber() const {
      return iterator_.StorageIndexForLastOverlay();
    }

   private:
    friend class SurfaceFlingerLayerTable;
    friend class macros_internal::AbstractConstIterator<
      ConstIterator, SurfaceFlingerLayerTable, RowNumber, ConstRowReference>;
  };
  class Iterator : public ConstIterator {
    public:
     RowReference row_reference() const {
       return {const_cast<SurfaceFlingerLayerTable*>(table()), CurrentRowNumber()};
     }

    private:
     friend class SurfaceFlingerLayerTable;

     explicit Iterator(SurfaceFlingerLayerTable* table, Table::Iterator iterator)
        : ConstIterator(table, std::move(iterator)) {}
  };

  struct IdAndRow {
    Id id;
    uint32_t row;
    RowReference row_reference;
    RowNumber row_number;
  };

  static std::vector<ColumnLegacy> GetColumns(
      SurfaceFlingerLayerTable* self,
      const macros_internal::MacroTable* parent) {
    std::vector<ColumnLegacy> columns =
        CopyColumnsFromParentOrAddRootColumns(parent);
    uint32_t olay_idx = OverlayCount(parent);
    AddColumnToVector(columns, "snapshot_id", &self->snapshot_id_, ColumnFlag::snapshot_id,
                      static_cast<uint32_t>(columns.size()), olay_idx);
    AddColumnToVector(columns, "arg_set_id", &self->arg_set_id_, ColumnFlag::arg_set_id,
                      static_cast<uint32_t>(columns.size()), olay_idx);
    AddColumnToVector(columns, "base64_proto_id", &self->base64_proto_id_, ColumnFlag::base64_proto_id,
                      static_cast<uint32_t>(columns.size()), olay_idx);
    base::ignore_result(self);
    return columns;
  }

  PERFETTO_NO_INLINE explicit SurfaceFlingerLayerTable(StringPool* pool)
      : macros_internal::MacroTable(
          pool,
          GetColumns(this, nullptr),
          nullptr),
        snapshot_id_(ColumnStorage<ColumnType::snapshot_id::stored_type>::Create<false>()),
        arg_set_id_(ColumnStorage<ColumnType::arg_set_id::stored_type>::Create<false>()),
        base64_proto_id_(ColumnStorage<ColumnType::base64_proto_id::stored_type>::Create<false>())
,
        id_storage_layer_(new column::IdStorage()),
        snapshot_id_storage_layer_(
        new column::NumericStorage<ColumnType::snapshot_id::non_optional_stored_type>(
          &snapshot_id_.vector(),
          ColumnTypeHelper<ColumnType::snapshot_id::stored_type>::ToColumnType(),
          false)),
        arg_set_id_storage_layer_(
          new column::NumericStorage<ColumnType::arg_set_id::non_optional_stored_type>(
            &arg_set_id_.non_null_vector(),
            ColumnTypeHelper<ColumnType::arg_set_id::stored_type>::ToColumnType(),
            false)),
        base64_proto_id_storage_layer_(
          new column::NumericStorage<ColumnType::base64_proto_id::non_optional_stored_type>(
            &base64_proto_id_.non_null_vector(),
            ColumnTypeHelper<ColumnType::base64_proto_id::stored_type>::ToColumnType(),
            false))
,
        arg_set_id_null_layer_(new column::NullOverlay(arg_set_id_.bv())),
        base64_proto_id_null_layer_(new column::NullOverlay(base64_proto_id_.bv())) {
    static_assert(
        ColumnLegacy::IsFlagsAndTypeValid<ColumnType::snapshot_id::stored_type>(
          ColumnFlag::snapshot_id),
        "Column type and flag combination is not valid");
      static_assert(
        ColumnLegacy::IsFlagsAndTypeValid<ColumnType::arg_set_id::stored_type>(
          ColumnFlag::arg_set_id),
        "Column type and flag combination is not valid");
      static_assert(
        ColumnLegacy::IsFlagsAndTypeValid<ColumnType::base64_proto_id::stored_type>(
          ColumnFlag::base64_proto_id),
        "Column type and flag combination is not valid");
    OnConstructionCompletedRegularConstructor(
      {id_storage_layer_,snapshot_id_storage_layer_,arg_set_id_storage_layer_,base64_proto_id_storage_layer_},
      {{},{},arg_set_id_null_layer_,base64_proto_id_null_layer_});
  }
  ~SurfaceFlingerLayerTable() override;

  static const char* Name() { return "surfaceflinger_layer"; }

  static Table::Schema ComputeStaticSchema() {
    Table::Schema schema;
    schema.columns.emplace_back(Table::Schema::Column{
        "id", SqlValue::Type::kLong, true, true, false, false});
    schema.columns.emplace_back(Table::Schema::Column{
        "snapshot_id", ColumnType::snapshot_id::SqlValueType(), false,
        false,
        false,
        false});
    schema.columns.emplace_back(Table::Schema::Column{
        "arg_set_id", ColumnType::arg_set_id::SqlValueType(), false,
        false,
        false,
        false});
    schema.columns.emplace_back(Table::Schema::Column{
        "base64_proto_id", ColumnType::base64_proto_id::SqlValueType(), false,
        false,
        false,
        false});
    return schema;
  }

  ConstIterator IterateRows() const {
    return ConstIterator(this, Table::IterateRows());
  }

  Iterator IterateRows() { return Iterator(this, Table::IterateRows()); }

  ConstIterator FilterToIterator(const Query& q) const {
    return ConstIterator(this, QueryToIterator(q));
  }

  Iterator FilterToIterator(const Query& q) {
    return Iterator(this, QueryToIterator(q));
  }

  void ShrinkToFit() {
    snapshot_id_.ShrinkToFit();
    arg_set_id_.ShrinkToFit();
    base64_proto_id_.ShrinkToFit();
  }

  ConstRowReference operator[](uint32_t r) const {
    return ConstRowReference(this, r);
  }
  RowReference operator[](uint32_t r) { return RowReference(this, r); }
  ConstRowReference operator[](RowNumber r) const {
    return ConstRowReference(this, r.row_number());
  }
  RowReference operator[](RowNumber r) {
    return RowReference(this, r.row_number());
  }

  std::optional<ConstRowReference> FindById(Id find_id) const {
    std::optional<uint32_t> row = id().IndexOf(find_id);
    return row ? std::make_optional(ConstRowReference(this, *row))
               : std::nullopt;
  }

  std::optional<RowReference> FindById(Id find_id) {
    std::optional<uint32_t> row = id().IndexOf(find_id);
    return row ? std::make_optional(RowReference(this, *row)) : std::nullopt;
  }

  IdAndRow Insert(const Row& row) {
    uint32_t row_number = row_count();
    Id id = Id{row_number};
    mutable_snapshot_id()->Append(row.snapshot_id);
    mutable_arg_set_id()->Append(row.arg_set_id);
    mutable_base64_proto_id()->Append(row.base64_proto_id);
    UpdateSelfOverlayAfterInsert();
    return IdAndRow{id, row_number, RowReference(this, row_number),
                     RowNumber(row_number)};
  }

  

  const IdColumn<SurfaceFlingerLayerTable::Id>& id() const {
    return static_cast<const ColumnType::id&>(columns()[ColumnIndex::id]);
  }
  const TypedColumn<SurfaceFlingerLayersSnapshotTable::Id>& snapshot_id() const {
    return static_cast<const ColumnType::snapshot_id&>(columns()[ColumnIndex::snapshot_id]);
  }
  const TypedColumn<std::optional<uint32_t>>& arg_set_id() const {
    return static_cast<const ColumnType::arg_set_id&>(columns()[ColumnIndex::arg_set_id]);
  }
  const TypedColumn<std::optional<uint32_t>>& base64_proto_id() const {
    return static_cast<const ColumnType::base64_proto_id&>(columns()[ColumnIndex::base64_proto_id]);
  }

  TypedColumn<SurfaceFlingerLayersSnapshotTable::Id>* mutable_snapshot_id() {
    return static_cast<ColumnType::snapshot_id*>(
        GetColumn(ColumnIndex::snapshot_id));
  }
  TypedColumn<std::optional<uint32_t>>* mutable_arg_set_id() {
    return static_cast<ColumnType::arg_set_id*>(
        GetColumn(ColumnIndex::arg_set_id));
  }
  TypedColumn<std::optional<uint32_t>>* mutable_base64_proto_id() {
    return static_cast<ColumnType::base64_proto_id*>(
        GetColumn(ColumnIndex::base64_proto_id));
  }

 private:
  
  
  ColumnStorage<ColumnType::snapshot_id::stored_type> snapshot_id_;
  ColumnStorage<ColumnType::arg_set_id::stored_type> arg_set_id_;
  ColumnStorage<ColumnType::base64_proto_id::stored_type> base64_proto_id_;

  RefPtr<column::StorageLayer> id_storage_layer_;
  RefPtr<column::StorageLayer> snapshot_id_storage_layer_;
  RefPtr<column::StorageLayer> arg_set_id_storage_layer_;
  RefPtr<column::StorageLayer> base64_proto_id_storage_layer_;

  RefPtr<column::OverlayLayer> arg_set_id_null_layer_;
  RefPtr<column::OverlayLayer> base64_proto_id_null_layer_;
};
  

class SurfaceFlingerTransactionsTable : public macros_internal::MacroTable {
 public:
  static constexpr uint32_t kColumnCount = 5;

  struct Id : public BaseId {
    Id() = default;
    explicit constexpr Id(uint32_t v) : BaseId(v) {}
  };
  static_assert(std::is_trivially_destructible_v<Id>,
                "Inheritance used without trivial destruction");
    
  struct ColumnIndex {
    static constexpr uint32_t id = 0;
    static constexpr uint32_t ts = 1;
    static constexpr uint32_t arg_set_id = 2;
    static constexpr uint32_t base64_proto_id = 3;
    static constexpr uint32_t vsync_id = 4;
  };
  struct ColumnType {
    using id = IdColumn<SurfaceFlingerTransactionsTable::Id>;
    using ts = TypedColumn<int64_t>;
    using arg_set_id = TypedColumn<std::optional<uint32_t>>;
    using base64_proto_id = TypedColumn<std::optional<uint32_t>>;
    using vsync_id = TypedColumn<std::optional<int64_t>>;
  };
  struct Row : public macros_internal::RootParentTable::Row {
    Row(int64_t in_ts = {},
        std::optional<uint32_t> in_arg_set_id = {},
        std::optional<uint32_t> in_base64_proto_id = {},
        std::optional<int64_t> in_vsync_id = {},
        std::nullptr_t = nullptr)
        : macros_internal::RootParentTable::Row(),
          ts(in_ts),
          arg_set_id(in_arg_set_id),
          base64_proto_id(in_base64_proto_id),
          vsync_id(in_vsync_id) {}
    int64_t ts;
    std::optional<uint32_t> arg_set_id;
    std::optional<uint32_t> base64_proto_id;
    std::optional<int64_t> vsync_id;

    bool operator==(const SurfaceFlingerTransactionsTable::Row& other) const {
      return ColumnType::ts::Equals(ts, other.ts) &&
       ColumnType::arg_set_id::Equals(arg_set_id, other.arg_set_id) &&
       ColumnType::base64_proto_id::Equals(base64_proto_id, other.base64_proto_id) &&
       ColumnType::vsync_id::Equals(vsync_id, other.vsync_id);
    }
  };
  struct ColumnFlag {
    static constexpr uint32_t ts = static_cast<uint32_t>(ColumnLegacy::Flag::kSorted) | ColumnType::ts::default_flags();
    static constexpr uint32_t arg_set_id = ColumnType::arg_set_id::default_flags();
    static constexpr uint32_t base64_proto_id = ColumnType::base64_proto_id::default_flags();
    static constexpr uint32_t vsync_id = ColumnType::vsync_id::default_flags();
  };

  class RowNumber;
  class ConstRowReference;
  class RowReference;

  class RowNumber : public macros_internal::AbstractRowNumber<
      SurfaceFlingerTransactionsTable, ConstRowReference, RowReference> {
   public:
    explicit RowNumber(uint32_t row_number)
        : AbstractRowNumber(row_number) {}
  };
  static_assert(std::is_trivially_destructible_v<RowNumber>,
                "Inheritance used without trivial destruction");

  class ConstRowReference : public macros_internal::AbstractConstRowReference<
    SurfaceFlingerTransactionsTable, RowNumber> {
   public:
    ConstRowReference(const SurfaceFlingerTransactionsTable* table, uint32_t row_number)
        : AbstractConstRowReference(table, row_number) {}

    ColumnType::id::type id() const {
      return table()->id()[row_number_];
    }
    ColumnType::ts::type ts() const {
      return table()->ts()[row_number_];
    }
    ColumnType::arg_set_id::type arg_set_id() const {
      return table()->arg_set_id()[row_number_];
    }
    ColumnType::base64_proto_id::type base64_proto_id() const {
      return table()->base64_proto_id()[row_number_];
    }
    ColumnType::vsync_id::type vsync_id() const {
      return table()->vsync_id()[row_number_];
    }
  };
  static_assert(std::is_trivially_destructible_v<ConstRowReference>,
                "Inheritance used without trivial destruction");
  class RowReference : public ConstRowReference {
   public:
    RowReference(const SurfaceFlingerTransactionsTable* table, uint32_t row_number)
        : ConstRowReference(table, row_number) {}

    void set_ts(
        ColumnType::ts::non_optional_type v) {
      return mutable_table()->mutable_ts()->Set(row_number_, v);
    }
    void set_arg_set_id(
        ColumnType::arg_set_id::non_optional_type v) {
      return mutable_table()->mutable_arg_set_id()->Set(row_number_, v);
    }
    void set_base64_proto_id(
        ColumnType::base64_proto_id::non_optional_type v) {
      return mutable_table()->mutable_base64_proto_id()->Set(row_number_, v);
    }
    void set_vsync_id(
        ColumnType::vsync_id::non_optional_type v) {
      return mutable_table()->mutable_vsync_id()->Set(row_number_, v);
    }

   private:
    SurfaceFlingerTransactionsTable* mutable_table() const {
      return const_cast<SurfaceFlingerTransactionsTable*>(table());
    }
  };
  static_assert(std::is_trivially_destructible_v<RowReference>,
                "Inheritance used without trivial destruction");

  class ConstIterator;
  class ConstIterator : public macros_internal::AbstractConstIterator<
    ConstIterator, SurfaceFlingerTransactionsTable, RowNumber, ConstRowReference> {
   public:
    ColumnType::id::type id() const {
      const auto& col = table()->id();
      return col.GetAtIdx(
        iterator_.StorageIndexForColumn(col.index_in_table()));
    }
    ColumnType::ts::type ts() const {
      const auto& col = table()->ts();
      return col.GetAtIdx(
        iterator_.StorageIndexForColumn(col.index_in_table()));
    }
    ColumnType::arg_set_id::type arg_set_id() const {
      const auto& col = table()->arg_set_id();
      return col.GetAtIdx(
        iterator_.StorageIndexForColumn(col.index_in_table()));
    }
    ColumnType::base64_proto_id::type base64_proto_id() const {
      const auto& col = table()->base64_proto_id();
      return col.GetAtIdx(
        iterator_.StorageIndexForColumn(col.index_in_table()));
    }
    ColumnType::vsync_id::type vsync_id() const {
      const auto& col = table()->vsync_id();
      return col.GetAtIdx(
        iterator_.StorageIndexForColumn(col.index_in_table()));
    }

   protected:
    explicit ConstIterator(const SurfaceFlingerTransactionsTable* table,
                           Table::Iterator iterator)
        : AbstractConstIterator(table, std::move(iterator)) {}

    uint32_t CurrentRowNumber() const {
      return iterator_.StorageIndexForLastOverlay();
    }

   private:
    friend class SurfaceFlingerTransactionsTable;
    friend class macros_internal::AbstractConstIterator<
      ConstIterator, SurfaceFlingerTransactionsTable, RowNumber, ConstRowReference>;
  };
  class Iterator : public ConstIterator {
    public:
     RowReference row_reference() const {
       return {const_cast<SurfaceFlingerTransactionsTable*>(table()), CurrentRowNumber()};
     }

    private:
     friend class SurfaceFlingerTransactionsTable;

     explicit Iterator(SurfaceFlingerTransactionsTable* table, Table::Iterator iterator)
        : ConstIterator(table, std::move(iterator)) {}
  };

  struct IdAndRow {
    Id id;
    uint32_t row;
    RowReference row_reference;
    RowNumber row_number;
  };

  static std::vector<ColumnLegacy> GetColumns(
      SurfaceFlingerTransactionsTable* self,
      const macros_internal::MacroTable* parent) {
    std::vector<ColumnLegacy> columns =
        CopyColumnsFromParentOrAddRootColumns(parent);
    uint32_t olay_idx = OverlayCount(parent);
    AddColumnToVector(columns, "ts", &self->ts_, ColumnFlag::ts,
                      static_cast<uint32_t>(columns.size()), olay_idx);
    AddColumnToVector(columns, "arg_set_id", &self->arg_set_id_, ColumnFlag::arg_set_id,
                      static_cast<uint32_t>(columns.size()), olay_idx);
    AddColumnToVector(columns, "base64_proto_id", &self->base64_proto_id_, ColumnFlag::base64_proto_id,
                      static_cast<uint32_t>(columns.size()), olay_idx);
    AddColumnToVector(columns, "vsync_id", &self->vsync_id_, ColumnFlag::vsync_id,
                      static_cast<uint32_t>(columns.size()), olay_idx);
    base::ignore_result(self);
    return columns;
  }

  PERFETTO_NO_INLINE explicit SurfaceFlingerTransactionsTable(StringPool* pool)
      : macros_internal::MacroTable(
          pool,
          GetColumns(this, nullptr),
          nullptr),
        ts_(ColumnStorage<ColumnType::ts::stored_type>::Create<false>()),
        arg_set_id_(ColumnStorage<ColumnType::arg_set_id::stored_type>::Create<false>()),
        base64_proto_id_(ColumnStorage<ColumnType::base64_proto_id::stored_type>::Create<false>()),
        vsync_id_(ColumnStorage<ColumnType::vsync_id::stored_type>::Create<false>())
,
        id_storage_layer_(new column::IdStorage()),
        ts_storage_layer_(
        new column::NumericStorage<ColumnType::ts::non_optional_stored_type>(
          &ts_.vector(),
          ColumnTypeHelper<ColumnType::ts::stored_type>::ToColumnType(),
          true)),
        arg_set_id_storage_layer_(
          new column::NumericStorage<ColumnType::arg_set_id::non_optional_stored_type>(
            &arg_set_id_.non_null_vector(),
            ColumnTypeHelper<ColumnType::arg_set_id::stored_type>::ToColumnType(),
            false)),
        base64_proto_id_storage_layer_(
          new column::NumericStorage<ColumnType::base64_proto_id::non_optional_stored_type>(
            &base64_proto_id_.non_null_vector(),
            ColumnTypeHelper<ColumnType::base64_proto_id::stored_type>::ToColumnType(),
            false)),
        vsync_id_storage_layer_(
          new column::NumericStorage<ColumnType::vsync_id::non_optional_stored_type>(
            &vsync_id_.non_null_vector(),
            ColumnTypeHelper<ColumnType::vsync_id::stored_type>::ToColumnType(),
            false))
,
        arg_set_id_null_layer_(new column::NullOverlay(arg_set_id_.bv())),
        base64_proto_id_null_layer_(new column::NullOverlay(base64_proto_id_.bv())),
        vsync_id_null_layer_(new column::NullOverlay(vsync_id_.bv())) {
    static_assert(
        ColumnLegacy::IsFlagsAndTypeValid<ColumnType::ts::stored_type>(
          ColumnFlag::ts),
        "Column type and flag combination is not valid");
      static_assert(
        ColumnLegacy::IsFlagsAndTypeValid<ColumnType::arg_set_id::stored_type>(
          ColumnFlag::arg_set_id),
        "Column type and flag combination is not valid");
      static_assert(
        ColumnLegacy::IsFlagsAndTypeValid<ColumnType::base64_proto_id::stored_type>(
          ColumnFlag::base64_proto_id),
        "Column type and flag combination is not valid");
      static_assert(
        ColumnLegacy::IsFlagsAndTypeValid<ColumnType::vsync_id::stored_type>(
          ColumnFlag::vsync_id),
        "Column type and flag combination is not valid");
    OnConstructionCompletedRegularConstructor(
      {id_storage_layer_,ts_storage_layer_,arg_set_id_storage_layer_,base64_proto_id_storage_layer_,vsync_id_storage_layer_},
      {{},{},arg_set_id_null_layer_,base64_proto_id_null_layer_,vsync_id_null_layer_});
  }
  ~SurfaceFlingerTransactionsTable() override;

  static const char* Name() { return "surfaceflinger_transactions"; }

  static Table::Schema ComputeStaticSchema() {
    Table::Schema schema;
    schema.columns.emplace_back(Table::Schema::Column{
        "id", SqlValue::Type::kLong, true, true, false, false});
    schema.columns.emplace_back(Table::Schema::Column{
        "ts", ColumnType::ts::SqlValueType(), false,
        true,
        false,
        false});
    schema.columns.emplace_back(Table::Schema::Column{
        "arg_set_id", ColumnType::arg_set_id::SqlValueType(), false,
        false,
        false,
        false});
    schema.columns.emplace_back(Table::Schema::Column{
        "base64_proto_id", ColumnType::base64_proto_id::SqlValueType(), false,
        false,
        false,
        false});
    schema.columns.emplace_back(Table::Schema::Column{
        "vsync_id", ColumnType::vsync_id::SqlValueType(), false,
        false,
        false,
        false});
    return schema;
  }

  ConstIterator IterateRows() const {
    return ConstIterator(this, Table::IterateRows());
  }

  Iterator IterateRows() { return Iterator(this, Table::IterateRows()); }

  ConstIterator FilterToIterator(const Query& q) const {
    return ConstIterator(this, QueryToIterator(q));
  }

  Iterator FilterToIterator(const Query& q) {
    return Iterator(this, QueryToIterator(q));
  }

  void ShrinkToFit() {
    ts_.ShrinkToFit();
    arg_set_id_.ShrinkToFit();
    base64_proto_id_.ShrinkToFit();
    vsync_id_.ShrinkToFit();
  }

  ConstRowReference operator[](uint32_t r) const {
    return ConstRowReference(this, r);
  }
  RowReference operator[](uint32_t r) { return RowReference(this, r); }
  ConstRowReference operator[](RowNumber r) const {
    return ConstRowReference(this, r.row_number());
  }
  RowReference operator[](RowNumber r) {
    return RowReference(this, r.row_number());
  }

  std::optional<ConstRowReference> FindById(Id find_id) const {
    std::optional<uint32_t> row = id().IndexOf(find_id);
    return row ? std::make_optional(ConstRowReference(this, *row))
               : std::nullopt;
  }

  std::optional<RowReference> FindById(Id find_id) {
    std::optional<uint32_t> row = id().IndexOf(find_id);
    return row ? std::make_optional(RowReference(this, *row)) : std::nullopt;
  }

  IdAndRow Insert(const Row& row) {
    uint32_t row_number = row_count();
    Id id = Id{row_number};
    mutable_ts()->Append(row.ts);
    mutable_arg_set_id()->Append(row.arg_set_id);
    mutable_base64_proto_id()->Append(row.base64_proto_id);
    mutable_vsync_id()->Append(row.vsync_id);
    UpdateSelfOverlayAfterInsert();
    return IdAndRow{id, row_number, RowReference(this, row_number),
                     RowNumber(row_number)};
  }

  

  const IdColumn<SurfaceFlingerTransactionsTable::Id>& id() const {
    return static_cast<const ColumnType::id&>(columns()[ColumnIndex::id]);
  }
  const TypedColumn<int64_t>& ts() const {
    return static_cast<const ColumnType::ts&>(columns()[ColumnIndex::ts]);
  }
  const TypedColumn<std::optional<uint32_t>>& arg_set_id() const {
    return static_cast<const ColumnType::arg_set_id&>(columns()[ColumnIndex::arg_set_id]);
  }
  const TypedColumn<std::optional<uint32_t>>& base64_proto_id() const {
    return static_cast<const ColumnType::base64_proto_id&>(columns()[ColumnIndex::base64_proto_id]);
  }
  const TypedColumn<std::optional<int64_t>>& vsync_id() const {
    return static_cast<const ColumnType::vsync_id&>(columns()[ColumnIndex::vsync_id]);
  }

  TypedColumn<int64_t>* mutable_ts() {
    return static_cast<ColumnType::ts*>(
        GetColumn(ColumnIndex::ts));
  }
  TypedColumn<std::optional<uint32_t>>* mutable_arg_set_id() {
    return static_cast<ColumnType::arg_set_id*>(
        GetColumn(ColumnIndex::arg_set_id));
  }
  TypedColumn<std::optional<uint32_t>>* mutable_base64_proto_id() {
    return static_cast<ColumnType::base64_proto_id*>(
        GetColumn(ColumnIndex::base64_proto_id));
  }
  TypedColumn<std::optional<int64_t>>* mutable_vsync_id() {
    return static_cast<ColumnType::vsync_id*>(
        GetColumn(ColumnIndex::vsync_id));
  }

 private:
  
  
  ColumnStorage<ColumnType::ts::stored_type> ts_;
  ColumnStorage<ColumnType::arg_set_id::stored_type> arg_set_id_;
  ColumnStorage<ColumnType::base64_proto_id::stored_type> base64_proto_id_;
  ColumnStorage<ColumnType::vsync_id::stored_type> vsync_id_;

  RefPtr<column::StorageLayer> id_storage_layer_;
  RefPtr<column::StorageLayer> ts_storage_layer_;
  RefPtr<column::StorageLayer> arg_set_id_storage_layer_;
  RefPtr<column::StorageLayer> base64_proto_id_storage_layer_;
  RefPtr<column::StorageLayer> vsync_id_storage_layer_;

  RefPtr<column::OverlayLayer> arg_set_id_null_layer_;
  RefPtr<column::OverlayLayer> base64_proto_id_null_layer_;
  RefPtr<column::OverlayLayer> vsync_id_null_layer_;
};
  

class SurfaceFlingerTransactionTable : public macros_internal::MacroTable {
 public:
  static constexpr uint32_t kColumnCount = 11;

  struct Id : public BaseId {
    Id() = default;
    explicit constexpr Id(uint32_t v) : BaseId(v) {}
  };
  static_assert(std::is_trivially_destructible_v<Id>,
                "Inheritance used without trivial destruction");
    
  struct ColumnIndex {
    static constexpr uint32_t id = 0;
    static constexpr uint32_t snapshot_id = 1;
    static constexpr uint32_t arg_set_id = 2;
    static constexpr uint32_t base64_proto_id = 3;
    static constexpr uint32_t transaction_id = 4;
    static constexpr uint32_t pid = 5;
    static constexpr uint32_t uid = 6;
    static constexpr uint32_t layer_id = 7;
    static constexpr uint32_t display_id = 8;
    static constexpr uint32_t flags_id = 9;
    static constexpr uint32_t transaction_type = 10;
  };
  struct ColumnType {
    using id = IdColumn<SurfaceFlingerTransactionTable::Id>;
    using snapshot_id = TypedColumn<SurfaceFlingerTransactionsTable::Id>;
    using arg_set_id = TypedColumn<std::optional<uint32_t>>;
    using base64_proto_id = TypedColumn<std::optional<uint32_t>>;
    using transaction_id = TypedColumn<std::optional<int64_t>>;
    using pid = TypedColumn<std::optional<uint32_t>>;
    using uid = TypedColumn<std::optional<uint32_t>>;
    using layer_id = TypedColumn<std::optional<uint32_t>>;
    using display_id = TypedColumn<std::optional<uint32_t>>;
    using flags_id = TypedColumn<std::optional<uint32_t>>;
    using transaction_type = TypedColumn<std::optional<StringPool::Id>>;
  };
  struct Row : public macros_internal::RootParentTable::Row {
    Row(SurfaceFlingerTransactionsTable::Id in_snapshot_id = {},
        std::optional<uint32_t> in_arg_set_id = {},
        std::optional<uint32_t> in_base64_proto_id = {},
        std::optional<int64_t> in_transaction_id = {},
        std::optional<uint32_t> in_pid = {},
        std::optional<uint32_t> in_uid = {},
        std::optional<uint32_t> in_layer_id = {},
        std::optional<uint32_t> in_display_id = {},
        std::optional<uint32_t> in_flags_id = {},
        std::optional<StringPool::Id> in_transaction_type = {},
        std::nullptr_t = nullptr)
        : macros_internal::RootParentTable::Row(),
          snapshot_id(in_snapshot_id),
          arg_set_id(in_arg_set_id),
          base64_proto_id(in_base64_proto_id),
          transaction_id(in_transaction_id),
          pid(in_pid),
          uid(in_uid),
          layer_id(in_layer_id),
          display_id(in_display_id),
          flags_id(in_flags_id),
          transaction_type(in_transaction_type) {}
    SurfaceFlingerTransactionsTable::Id snapshot_id;
    std::optional<uint32_t> arg_set_id;
    std::optional<uint32_t> base64_proto_id;
    std::optional<int64_t> transaction_id;
    std::optional<uint32_t> pid;
    std::optional<uint32_t> uid;
    std::optional<uint32_t> layer_id;
    std::optional<uint32_t> display_id;
    std::optional<uint32_t> flags_id;
    std::optional<StringPool::Id> transaction_type;

    bool operator==(const SurfaceFlingerTransactionTable::Row& other) const {
      return ColumnType::snapshot_id::Equals(snapshot_id, other.snapshot_id) &&
       ColumnType::arg_set_id::Equals(arg_set_id, other.arg_set_id) &&
       ColumnType::base64_proto_id::Equals(base64_proto_id, other.base64_proto_id) &&
       ColumnType::transaction_id::Equals(transaction_id, other.transaction_id) &&
       ColumnType::pid::Equals(pid, other.pid) &&
       ColumnType::uid::Equals(uid, other.uid) &&
       ColumnType::layer_id::Equals(layer_id, other.layer_id) &&
       ColumnType::display_id::Equals(display_id, other.display_id) &&
       ColumnType::flags_id::Equals(flags_id, other.flags_id) &&
       ColumnType::transaction_type::Equals(transaction_type, other.transaction_type);
    }
  };
  struct ColumnFlag {
    static constexpr uint32_t snapshot_id = ColumnType::snapshot_id::default_flags();
    static constexpr uint32_t arg_set_id = ColumnType::arg_set_id::default_flags();
    static constexpr uint32_t base64_proto_id = ColumnType::base64_proto_id::default_flags();
    static constexpr uint32_t transaction_id = ColumnType::transaction_id::default_flags();
    static constexpr uint32_t pid = ColumnType::pid::default_flags();
    static constexpr uint32_t uid = ColumnType::uid::default_flags();
    static constexpr uint32_t layer_id = ColumnType::layer_id::default_flags();
    static constexpr uint32_t display_id = ColumnType::display_id::default_flags();
    static constexpr uint32_t flags_id = ColumnType::flags_id::default_flags();
    static constexpr uint32_t transaction_type = ColumnType::transaction_type::default_flags();
  };

  class RowNumber;
  class ConstRowReference;
  class RowReference;

  class RowNumber : public macros_internal::AbstractRowNumber<
      SurfaceFlingerTransactionTable, ConstRowReference, RowReference> {
   public:
    explicit RowNumber(uint32_t row_number)
        : AbstractRowNumber(row_number) {}
  };
  static_assert(std::is_trivially_destructible_v<RowNumber>,
                "Inheritance used without trivial destruction");

  class ConstRowReference : public macros_internal::AbstractConstRowReference<
    SurfaceFlingerTransactionTable, RowNumber> {
   public:
    ConstRowReference(const SurfaceFlingerTransactionTable* table, uint32_t row_number)
        : AbstractConstRowReference(table, row_number) {}

    ColumnType::id::type id() const {
      return table()->id()[row_number_];
    }
    ColumnType::snapshot_id::type snapshot_id() const {
      return table()->snapshot_id()[row_number_];
    }
    ColumnType::arg_set_id::type arg_set_id() const {
      return table()->arg_set_id()[row_number_];
    }
    ColumnType::base64_proto_id::type base64_proto_id() const {
      return table()->base64_proto_id()[row_number_];
    }
    ColumnType::transaction_id::type transaction_id() const {
      return table()->transaction_id()[row_number_];
    }
    ColumnType::pid::type pid() const {
      return table()->pid()[row_number_];
    }
    ColumnType::uid::type uid() const {
      return table()->uid()[row_number_];
    }
    ColumnType::layer_id::type layer_id() const {
      return table()->layer_id()[row_number_];
    }
    ColumnType::display_id::type display_id() const {
      return table()->display_id()[row_number_];
    }
    ColumnType::flags_id::type flags_id() const {
      return table()->flags_id()[row_number_];
    }
    ColumnType::transaction_type::type transaction_type() const {
      return table()->transaction_type()[row_number_];
    }
  };
  static_assert(std::is_trivially_destructible_v<ConstRowReference>,
                "Inheritance used without trivial destruction");
  class RowReference : public ConstRowReference {
   public:
    RowReference(const SurfaceFlingerTransactionTable* table, uint32_t row_number)
        : ConstRowReference(table, row_number) {}

    void set_snapshot_id(
        ColumnType::snapshot_id::non_optional_type v) {
      return mutable_table()->mutable_snapshot_id()->Set(row_number_, v);
    }
    void set_arg_set_id(
        ColumnType::arg_set_id::non_optional_type v) {
      return mutable_table()->mutable_arg_set_id()->Set(row_number_, v);
    }
    void set_base64_proto_id(
        ColumnType::base64_proto_id::non_optional_type v) {
      return mutable_table()->mutable_base64_proto_id()->Set(row_number_, v);
    }
    void set_transaction_id(
        ColumnType::transaction_id::non_optional_type v) {
      return mutable_table()->mutable_transaction_id()->Set(row_number_, v);
    }
    void set_pid(
        ColumnType::pid::non_optional_type v) {
      return mutable_table()->mutable_pid()->Set(row_number_, v);
    }
    void set_uid(
        ColumnType::uid::non_optional_type v) {
      return mutable_table()->mutable_uid()->Set(row_number_, v);
    }
    void set_layer_id(
        ColumnType::layer_id::non_optional_type v) {
      return mutable_table()->mutable_layer_id()->Set(row_number_, v);
    }
    void set_display_id(
        ColumnType::display_id::non_optional_type v) {
      return mutable_table()->mutable_display_id()->Set(row_number_, v);
    }
    void set_flags_id(
        ColumnType::flags_id::non_optional_type v) {
      return mutable_table()->mutable_flags_id()->Set(row_number_, v);
    }
    void set_transaction_type(
        ColumnType::transaction_type::non_optional_type v) {
      return mutable_table()->mutable_transaction_type()->Set(row_number_, v);
    }

   private:
    SurfaceFlingerTransactionTable* mutable_table() const {
      return const_cast<SurfaceFlingerTransactionTable*>(table());
    }
  };
  static_assert(std::is_trivially_destructible_v<RowReference>,
                "Inheritance used without trivial destruction");

  class ConstIterator;
  class ConstIterator : public macros_internal::AbstractConstIterator<
    ConstIterator, SurfaceFlingerTransactionTable, RowNumber, ConstRowReference> {
   public:
    ColumnType::id::type id() const {
      const auto& col = table()->id();
      return col.GetAtIdx(
        iterator_.StorageIndexForColumn(col.index_in_table()));
    }
    ColumnType::snapshot_id::type snapshot_id() const {
      const auto& col = table()->snapshot_id();
      return col.GetAtIdx(
        iterator_.StorageIndexForColumn(col.index_in_table()));
    }
    ColumnType::arg_set_id::type arg_set_id() const {
      const auto& col = table()->arg_set_id();
      return col.GetAtIdx(
        iterator_.StorageIndexForColumn(col.index_in_table()));
    }
    ColumnType::base64_proto_id::type base64_proto_id() const {
      const auto& col = table()->base64_proto_id();
      return col.GetAtIdx(
        iterator_.StorageIndexForColumn(col.index_in_table()));
    }
    ColumnType::transaction_id::type transaction_id() const {
      const auto& col = table()->transaction_id();
      return col.GetAtIdx(
        iterator_.StorageIndexForColumn(col.index_in_table()));
    }
    ColumnType::pid::type pid() const {
      const auto& col = table()->pid();
      return col.GetAtIdx(
        iterator_.StorageIndexForColumn(col.index_in_table()));
    }
    ColumnType::uid::type uid() const {
      const auto& col = table()->uid();
      return col.GetAtIdx(
        iterator_.StorageIndexForColumn(col.index_in_table()));
    }
    ColumnType::layer_id::type layer_id() const {
      const auto& col = table()->layer_id();
      return col.GetAtIdx(
        iterator_.StorageIndexForColumn(col.index_in_table()));
    }
    ColumnType::display_id::type display_id() const {
      const auto& col = table()->display_id();
      return col.GetAtIdx(
        iterator_.StorageIndexForColumn(col.index_in_table()));
    }
    ColumnType::flags_id::type flags_id() const {
      const auto& col = table()->flags_id();
      return col.GetAtIdx(
        iterator_.StorageIndexForColumn(col.index_in_table()));
    }
    ColumnType::transaction_type::type transaction_type() const {
      const auto& col = table()->transaction_type();
      return col.GetAtIdx(
        iterator_.StorageIndexForColumn(col.index_in_table()));
    }

   protected:
    explicit ConstIterator(const SurfaceFlingerTransactionTable* table,
                           Table::Iterator iterator)
        : AbstractConstIterator(table, std::move(iterator)) {}

    uint32_t CurrentRowNumber() const {
      return iterator_.StorageIndexForLastOverlay();
    }

   private:
    friend class SurfaceFlingerTransactionTable;
    friend class macros_internal::AbstractConstIterator<
      ConstIterator, SurfaceFlingerTransactionTable, RowNumber, ConstRowReference>;
  };
  class Iterator : public ConstIterator {
    public:
     RowReference row_reference() const {
       return {const_cast<SurfaceFlingerTransactionTable*>(table()), CurrentRowNumber()};
     }

    private:
     friend class SurfaceFlingerTransactionTable;

     explicit Iterator(SurfaceFlingerTransactionTable* table, Table::Iterator iterator)
        : ConstIterator(table, std::move(iterator)) {}
  };

  struct IdAndRow {
    Id id;
    uint32_t row;
    RowReference row_reference;
    RowNumber row_number;
  };

  static std::vector<ColumnLegacy> GetColumns(
      SurfaceFlingerTransactionTable* self,
      const macros_internal::MacroTable* parent) {
    std::vector<ColumnLegacy> columns =
        CopyColumnsFromParentOrAddRootColumns(parent);
    uint32_t olay_idx = OverlayCount(parent);
    AddColumnToVector(columns, "snapshot_id", &self->snapshot_id_, ColumnFlag::snapshot_id,
                      static_cast<uint32_t>(columns.size()), olay_idx);
    AddColumnToVector(columns, "arg_set_id", &self->arg_set_id_, ColumnFlag::arg_set_id,
                      static_cast<uint32_t>(columns.size()), olay_idx);
    AddColumnToVector(columns, "base64_proto_id", &self->base64_proto_id_, ColumnFlag::base64_proto_id,
                      static_cast<uint32_t>(columns.size()), olay_idx);
    AddColumnToVector(columns, "transaction_id", &self->transaction_id_, ColumnFlag::transaction_id,
                      static_cast<uint32_t>(columns.size()), olay_idx);
    AddColumnToVector(columns, "pid", &self->pid_, ColumnFlag::pid,
                      static_cast<uint32_t>(columns.size()), olay_idx);
    AddColumnToVector(columns, "uid", &self->uid_, ColumnFlag::uid,
                      static_cast<uint32_t>(columns.size()), olay_idx);
    AddColumnToVector(columns, "layer_id", &self->layer_id_, ColumnFlag::layer_id,
                      static_cast<uint32_t>(columns.size()), olay_idx);
    AddColumnToVector(columns, "display_id", &self->display_id_, ColumnFlag::display_id,
                      static_cast<uint32_t>(columns.size()), olay_idx);
    AddColumnToVector(columns, "flags_id", &self->flags_id_, ColumnFlag::flags_id,
                      static_cast<uint32_t>(columns.size()), olay_idx);
    AddColumnToVector(columns, "transaction_type", &self->transaction_type_, ColumnFlag::transaction_type,
                      static_cast<uint32_t>(columns.size()), olay_idx);
    base::ignore_result(self);
    return columns;
  }

  PERFETTO_NO_INLINE explicit SurfaceFlingerTransactionTable(StringPool* pool)
      : macros_internal::MacroTable(
          pool,
          GetColumns(this, nullptr),
          nullptr),
        snapshot_id_(ColumnStorage<ColumnType::snapshot_id::stored_type>::Create<false>()),
        arg_set_id_(ColumnStorage<ColumnType::arg_set_id::stored_type>::Create<false>()),
        base64_proto_id_(ColumnStorage<ColumnType::base64_proto_id::stored_type>::Create<false>()),
        transaction_id_(ColumnStorage<ColumnType::transaction_id::stored_type>::Create<false>()),
        pid_(ColumnStorage<ColumnType::pid::stored_type>::Create<false>()),
        uid_(ColumnStorage<ColumnType::uid::stored_type>::Create<false>()),
        layer_id_(ColumnStorage<ColumnType::layer_id::stored_type>::Create<false>()),
        display_id_(ColumnStorage<ColumnType::display_id::stored_type>::Create<false>()),
        flags_id_(ColumnStorage<ColumnType::flags_id::stored_type>::Create<false>()),
        transaction_type_(ColumnStorage<ColumnType::transaction_type::stored_type>::Create<false>())
,
        id_storage_layer_(new column::IdStorage()),
        snapshot_id_storage_layer_(
        new column::NumericStorage<ColumnType::snapshot_id::non_optional_stored_type>(
          &snapshot_id_.vector(),
          ColumnTypeHelper<ColumnType::snapshot_id::stored_type>::ToColumnType(),
          false)),
        arg_set_id_storage_layer_(
          new column::NumericStorage<ColumnType::arg_set_id::non_optional_stored_type>(
            &arg_set_id_.non_null_vector(),
            ColumnTypeHelper<ColumnType::arg_set_id::stored_type>::ToColumnType(),
            false)),
        base64_proto_id_storage_layer_(
          new column::NumericStorage<ColumnType::base64_proto_id::non_optional_stored_type>(
            &base64_proto_id_.non_null_vector(),
            ColumnTypeHelper<ColumnType::base64_proto_id::stored_type>::ToColumnType(),
            false)),
        transaction_id_storage_layer_(
          new column::NumericStorage<ColumnType::transaction_id::non_optional_stored_type>(
            &transaction_id_.non_null_vector(),
            ColumnTypeHelper<ColumnType::transaction_id::stored_type>::ToColumnType(),
            false)),
        pid_storage_layer_(
          new column::NumericStorage<ColumnType::pid::non_optional_stored_type>(
            &pid_.non_null_vector(),
            ColumnTypeHelper<ColumnType::pid::stored_type>::ToColumnType(),
            false)),
        uid_storage_layer_(
          new column::NumericStorage<ColumnType::uid::non_optional_stored_type>(
            &uid_.non_null_vector(),
            ColumnTypeHelper<ColumnType::uid::stored_type>::ToColumnType(),
            false)),
        layer_id_storage_layer_(
          new column::NumericStorage<ColumnType::layer_id::non_optional_stored_type>(
            &layer_id_.non_null_vector(),
            ColumnTypeHelper<ColumnType::layer_id::stored_type>::ToColumnType(),
            false)),
        display_id_storage_layer_(
          new column::NumericStorage<ColumnType::display_id::non_optional_stored_type>(
            &display_id_.non_null_vector(),
            ColumnTypeHelper<ColumnType::display_id::stored_type>::ToColumnType(),
            false)),
        flags_id_storage_layer_(
          new column::NumericStorage<ColumnType::flags_id::non_optional_stored_type>(
            &flags_id_.non_null_vector(),
            ColumnTypeHelper<ColumnType::flags_id::stored_type>::ToColumnType(),
            false)),
        transaction_type_storage_layer_(
          new column::StringStorage(string_pool(), &transaction_type_.vector()))
,
        arg_set_id_null_layer_(new column::NullOverlay(arg_set_id_.bv())),
        base64_proto_id_null_layer_(new column::NullOverlay(base64_proto_id_.bv())),
        transaction_id_null_layer_(new column::NullOverlay(transaction_id_.bv())),
        pid_null_layer_(new column::NullOverlay(pid_.bv())),
        uid_null_layer_(new column::NullOverlay(uid_.bv())),
        layer_id_null_layer_(new column::NullOverlay(layer_id_.bv())),
        display_id_null_layer_(new column::NullOverlay(display_id_.bv())),
        flags_id_null_layer_(new column::NullOverlay(flags_id_.bv())) {
    static_assert(
        ColumnLegacy::IsFlagsAndTypeValid<ColumnType::snapshot_id::stored_type>(
          ColumnFlag::snapshot_id),
        "Column type and flag combination is not valid");
      static_assert(
        ColumnLegacy::IsFlagsAndTypeValid<ColumnType::arg_set_id::stored_type>(
          ColumnFlag::arg_set_id),
        "Column type and flag combination is not valid");
      static_assert(
        ColumnLegacy::IsFlagsAndTypeValid<ColumnType::base64_proto_id::stored_type>(
          ColumnFlag::base64_proto_id),
        "Column type and flag combination is not valid");
      static_assert(
        ColumnLegacy::IsFlagsAndTypeValid<ColumnType::transaction_id::stored_type>(
          ColumnFlag::transaction_id),
        "Column type and flag combination is not valid");
      static_assert(
        ColumnLegacy::IsFlagsAndTypeValid<ColumnType::pid::stored_type>(
          ColumnFlag::pid),
        "Column type and flag combination is not valid");
      static_assert(
        ColumnLegacy::IsFlagsAndTypeValid<ColumnType::uid::stored_type>(
          ColumnFlag::uid),
        "Column type and flag combination is not valid");
      static_assert(
        ColumnLegacy::IsFlagsAndTypeValid<ColumnType::layer_id::stored_type>(
          ColumnFlag::layer_id),
        "Column type and flag combination is not valid");
      static_assert(
        ColumnLegacy::IsFlagsAndTypeValid<ColumnType::display_id::stored_type>(
          ColumnFlag::display_id),
        "Column type and flag combination is not valid");
      static_assert(
        ColumnLegacy::IsFlagsAndTypeValid<ColumnType::flags_id::stored_type>(
          ColumnFlag::flags_id),
        "Column type and flag combination is not valid");
      static_assert(
        ColumnLegacy::IsFlagsAndTypeValid<ColumnType::transaction_type::stored_type>(
          ColumnFlag::transaction_type),
        "Column type and flag combination is not valid");
    OnConstructionCompletedRegularConstructor(
      {id_storage_layer_,snapshot_id_storage_layer_,arg_set_id_storage_layer_,base64_proto_id_storage_layer_,transaction_id_storage_layer_,pid_storage_layer_,uid_storage_layer_,layer_id_storage_layer_,display_id_storage_layer_,flags_id_storage_layer_,transaction_type_storage_layer_},
      {{},{},arg_set_id_null_layer_,base64_proto_id_null_layer_,transaction_id_null_layer_,pid_null_layer_,uid_null_layer_,layer_id_null_layer_,display_id_null_layer_,flags_id_null_layer_,{}});
  }
  ~SurfaceFlingerTransactionTable() override;

  static const char* Name() { return "__intrinsic_surfaceflinger_transaction"; }

  static Table::Schema ComputeStaticSchema() {
    Table::Schema schema;
    schema.columns.emplace_back(Table::Schema::Column{
        "id", SqlValue::Type::kLong, true, true, false, false});
    schema.columns.emplace_back(Table::Schema::Column{
        "snapshot_id", ColumnType::snapshot_id::SqlValueType(), false,
        false,
        false,
        false});
    schema.columns.emplace_back(Table::Schema::Column{
        "arg_set_id", ColumnType::arg_set_id::SqlValueType(), false,
        false,
        false,
        false});
    schema.columns.emplace_back(Table::Schema::Column{
        "base64_proto_id", ColumnType::base64_proto_id::SqlValueType(), false,
        false,
        false,
        false});
    schema.columns.emplace_back(Table::Schema::Column{
        "transaction_id", ColumnType::transaction_id::SqlValueType(), false,
        false,
        false,
        false});
    schema.columns.emplace_back(Table::Schema::Column{
        "pid", ColumnType::pid::SqlValueType(), false,
        false,
        false,
        false});
    schema.columns.emplace_back(Table::Schema::Column{
        "uid", ColumnType::uid::SqlValueType(), false,
        false,
        false,
        false});
    schema.columns.emplace_back(Table::Schema::Column{
        "layer_id", ColumnType::layer_id::SqlValueType(), false,
        false,
        false,
        false});
    schema.columns.emplace_back(Table::Schema::Column{
        "display_id", ColumnType::display_id::SqlValueType(), false,
        false,
        false,
        false});
    schema.columns.emplace_back(Table::Schema::Column{
        "flags_id", ColumnType::flags_id::SqlValueType(), false,
        false,
        false,
        false});
    schema.columns.emplace_back(Table::Schema::Column{
        "transaction_type", ColumnType::transaction_type::SqlValueType(), false,
        false,
        false,
        false});
    return schema;
  }

  ConstIterator IterateRows() const {
    return ConstIterator(this, Table::IterateRows());
  }

  Iterator IterateRows() { return Iterator(this, Table::IterateRows()); }

  ConstIterator FilterToIterator(const Query& q) const {
    return ConstIterator(this, QueryToIterator(q));
  }

  Iterator FilterToIterator(const Query& q) {
    return Iterator(this, QueryToIterator(q));
  }

  void ShrinkToFit() {
    snapshot_id_.ShrinkToFit();
    arg_set_id_.ShrinkToFit();
    base64_proto_id_.ShrinkToFit();
    transaction_id_.ShrinkToFit();
    pid_.ShrinkToFit();
    uid_.ShrinkToFit();
    layer_id_.ShrinkToFit();
    display_id_.ShrinkToFit();
    flags_id_.ShrinkToFit();
    transaction_type_.ShrinkToFit();
  }

  ConstRowReference operator[](uint32_t r) const {
    return ConstRowReference(this, r);
  }
  RowReference operator[](uint32_t r) { return RowReference(this, r); }
  ConstRowReference operator[](RowNumber r) const {
    return ConstRowReference(this, r.row_number());
  }
  RowReference operator[](RowNumber r) {
    return RowReference(this, r.row_number());
  }

  std::optional<ConstRowReference> FindById(Id find_id) const {
    std::optional<uint32_t> row = id().IndexOf(find_id);
    return row ? std::make_optional(ConstRowReference(this, *row))
               : std::nullopt;
  }

  std::optional<RowReference> FindById(Id find_id) {
    std::optional<uint32_t> row = id().IndexOf(find_id);
    return row ? std::make_optional(RowReference(this, *row)) : std::nullopt;
  }

  IdAndRow Insert(const Row& row) {
    uint32_t row_number = row_count();
    Id id = Id{row_number};
    mutable_snapshot_id()->Append(row.snapshot_id);
    mutable_arg_set_id()->Append(row.arg_set_id);
    mutable_base64_proto_id()->Append(row.base64_proto_id);
    mutable_transaction_id()->Append(row.transaction_id);
    mutable_pid()->Append(row.pid);
    mutable_uid()->Append(row.uid);
    mutable_layer_id()->Append(row.layer_id);
    mutable_display_id()->Append(row.display_id);
    mutable_flags_id()->Append(row.flags_id);
    mutable_transaction_type()->Append(row.transaction_type);
    UpdateSelfOverlayAfterInsert();
    return IdAndRow{id, row_number, RowReference(this, row_number),
                     RowNumber(row_number)};
  }

  

  const IdColumn<SurfaceFlingerTransactionTable::Id>& id() const {
    return static_cast<const ColumnType::id&>(columns()[ColumnIndex::id]);
  }
  const TypedColumn<SurfaceFlingerTransactionsTable::Id>& snapshot_id() const {
    return static_cast<const ColumnType::snapshot_id&>(columns()[ColumnIndex::snapshot_id]);
  }
  const TypedColumn<std::optional<uint32_t>>& arg_set_id() const {
    return static_cast<const ColumnType::arg_set_id&>(columns()[ColumnIndex::arg_set_id]);
  }
  const TypedColumn<std::optional<uint32_t>>& base64_proto_id() const {
    return static_cast<const ColumnType::base64_proto_id&>(columns()[ColumnIndex::base64_proto_id]);
  }
  const TypedColumn<std::optional<int64_t>>& transaction_id() const {
    return static_cast<const ColumnType::transaction_id&>(columns()[ColumnIndex::transaction_id]);
  }
  const TypedColumn<std::optional<uint32_t>>& pid() const {
    return static_cast<const ColumnType::pid&>(columns()[ColumnIndex::pid]);
  }
  const TypedColumn<std::optional<uint32_t>>& uid() const {
    return static_cast<const ColumnType::uid&>(columns()[ColumnIndex::uid]);
  }
  const TypedColumn<std::optional<uint32_t>>& layer_id() const {
    return static_cast<const ColumnType::layer_id&>(columns()[ColumnIndex::layer_id]);
  }
  const TypedColumn<std::optional<uint32_t>>& display_id() const {
    return static_cast<const ColumnType::display_id&>(columns()[ColumnIndex::display_id]);
  }
  const TypedColumn<std::optional<uint32_t>>& flags_id() const {
    return static_cast<const ColumnType::flags_id&>(columns()[ColumnIndex::flags_id]);
  }
  const TypedColumn<std::optional<StringPool::Id>>& transaction_type() const {
    return static_cast<const ColumnType::transaction_type&>(columns()[ColumnIndex::transaction_type]);
  }

  TypedColumn<SurfaceFlingerTransactionsTable::Id>* mutable_snapshot_id() {
    return static_cast<ColumnType::snapshot_id*>(
        GetColumn(ColumnIndex::snapshot_id));
  }
  TypedColumn<std::optional<uint32_t>>* mutable_arg_set_id() {
    return static_cast<ColumnType::arg_set_id*>(
        GetColumn(ColumnIndex::arg_set_id));
  }
  TypedColumn<std::optional<uint32_t>>* mutable_base64_proto_id() {
    return static_cast<ColumnType::base64_proto_id*>(
        GetColumn(ColumnIndex::base64_proto_id));
  }
  TypedColumn<std::optional<int64_t>>* mutable_transaction_id() {
    return static_cast<ColumnType::transaction_id*>(
        GetColumn(ColumnIndex::transaction_id));
  }
  TypedColumn<std::optional<uint32_t>>* mutable_pid() {
    return static_cast<ColumnType::pid*>(
        GetColumn(ColumnIndex::pid));
  }
  TypedColumn<std::optional<uint32_t>>* mutable_uid() {
    return static_cast<ColumnType::uid*>(
        GetColumn(ColumnIndex::uid));
  }
  TypedColumn<std::optional<uint32_t>>* mutable_layer_id() {
    return static_cast<ColumnType::layer_id*>(
        GetColumn(ColumnIndex::layer_id));
  }
  TypedColumn<std::optional<uint32_t>>* mutable_display_id() {
    return static_cast<ColumnType::display_id*>(
        GetColumn(ColumnIndex::display_id));
  }
  TypedColumn<std::optional<uint32_t>>* mutable_flags_id() {
    return static_cast<ColumnType::flags_id*>(
        GetColumn(ColumnIndex::flags_id));
  }
  TypedColumn<std::optional<StringPool::Id>>* mutable_transaction_type() {
    return static_cast<ColumnType::transaction_type*>(
        GetColumn(ColumnIndex::transaction_type));
  }

 private:
  
  
  ColumnStorage<ColumnType::snapshot_id::stored_type> snapshot_id_;
  ColumnStorage<ColumnType::arg_set_id::stored_type> arg_set_id_;
  ColumnStorage<ColumnType::base64_proto_id::stored_type> base64_proto_id_;
  ColumnStorage<ColumnType::transaction_id::stored_type> transaction_id_;
  ColumnStorage<ColumnType::pid::stored_type> pid_;
  ColumnStorage<ColumnType::uid::stored_type> uid_;
  ColumnStorage<ColumnType::layer_id::stored_type> layer_id_;
  ColumnStorage<ColumnType::display_id::stored_type> display_id_;
  ColumnStorage<ColumnType::flags_id::stored_type> flags_id_;
  ColumnStorage<ColumnType::transaction_type::stored_type> transaction_type_;

  RefPtr<column::StorageLayer> id_storage_layer_;
  RefPtr<column::StorageLayer> snapshot_id_storage_layer_;
  RefPtr<column::StorageLayer> arg_set_id_storage_layer_;
  RefPtr<column::StorageLayer> base64_proto_id_storage_layer_;
  RefPtr<column::StorageLayer> transaction_id_storage_layer_;
  RefPtr<column::StorageLayer> pid_storage_layer_;
  RefPtr<column::StorageLayer> uid_storage_layer_;
  RefPtr<column::StorageLayer> layer_id_storage_layer_;
  RefPtr<column::StorageLayer> display_id_storage_layer_;
  RefPtr<column::StorageLayer> flags_id_storage_layer_;
  RefPtr<column::StorageLayer> transaction_type_storage_layer_;

  RefPtr<column::OverlayLayer> arg_set_id_null_layer_;
  RefPtr<column::OverlayLayer> base64_proto_id_null_layer_;
  RefPtr<column::OverlayLayer> transaction_id_null_layer_;
  RefPtr<column::OverlayLayer> pid_null_layer_;
  RefPtr<column::OverlayLayer> uid_null_layer_;
  RefPtr<column::OverlayLayer> layer_id_null_layer_;
  RefPtr<column::OverlayLayer> display_id_null_layer_;
  RefPtr<column::OverlayLayer> flags_id_null_layer_;
};
  

class SurfaceFlingerTransactionFlagTable : public macros_internal::MacroTable {
 public:
  static constexpr uint32_t kColumnCount = 3;

  struct Id : public BaseId {
    Id() = default;
    explicit constexpr Id(uint32_t v) : BaseId(v) {}
  };
  static_assert(std::is_trivially_destructible_v<Id>,
                "Inheritance used without trivial destruction");
    
  struct ColumnIndex {
    static constexpr uint32_t id = 0;
    static constexpr uint32_t flags_id = 1;
    static constexpr uint32_t flag = 2;
  };
  struct ColumnType {
    using id = IdColumn<SurfaceFlingerTransactionFlagTable::Id>;
    using flags_id = TypedColumn<std::optional<uint32_t>>;
    using flag = TypedColumn<std::optional<StringPool::Id>>;
  };
  struct Row : public macros_internal::RootParentTable::Row {
    Row(std::optional<uint32_t> in_flags_id = {},
        std::optional<StringPool::Id> in_flag = {},
        std::nullptr_t = nullptr)
        : macros_internal::RootParentTable::Row(),
          flags_id(in_flags_id),
          flag(in_flag) {}
    std::optional<uint32_t> flags_id;
    std::optional<StringPool::Id> flag;

    bool operator==(const SurfaceFlingerTransactionFlagTable::Row& other) const {
      return ColumnType::flags_id::Equals(flags_id, other.flags_id) &&
       ColumnType::flag::Equals(flag, other.flag);
    }
  };
  struct ColumnFlag {
    static constexpr uint32_t flags_id = ColumnType::flags_id::default_flags();
    static constexpr uint32_t flag = ColumnType::flag::default_flags();
  };

  class RowNumber;
  class ConstRowReference;
  class RowReference;

  class RowNumber : public macros_internal::AbstractRowNumber<
      SurfaceFlingerTransactionFlagTable, ConstRowReference, RowReference> {
   public:
    explicit RowNumber(uint32_t row_number)
        : AbstractRowNumber(row_number) {}
  };
  static_assert(std::is_trivially_destructible_v<RowNumber>,
                "Inheritance used without trivial destruction");

  class ConstRowReference : public macros_internal::AbstractConstRowReference<
    SurfaceFlingerTransactionFlagTable, RowNumber> {
   public:
    ConstRowReference(const SurfaceFlingerTransactionFlagTable* table, uint32_t row_number)
        : AbstractConstRowReference(table, row_number) {}

    ColumnType::id::type id() const {
      return table()->id()[row_number_];
    }
    ColumnType::flags_id::type flags_id() const {
      return table()->flags_id()[row_number_];
    }
    ColumnType::flag::type flag() const {
      return table()->flag()[row_number_];
    }
  };
  static_assert(std::is_trivially_destructible_v<ConstRowReference>,
                "Inheritance used without trivial destruction");
  class RowReference : public ConstRowReference {
   public:
    RowReference(const SurfaceFlingerTransactionFlagTable* table, uint32_t row_number)
        : ConstRowReference(table, row_number) {}

    void set_flags_id(
        ColumnType::flags_id::non_optional_type v) {
      return mutable_table()->mutable_flags_id()->Set(row_number_, v);
    }
    void set_flag(
        ColumnType::flag::non_optional_type v) {
      return mutable_table()->mutable_flag()->Set(row_number_, v);
    }

   private:
    SurfaceFlingerTransactionFlagTable* mutable_table() const {
      return const_cast<SurfaceFlingerTransactionFlagTable*>(table());
    }
  };
  static_assert(std::is_trivially_destructible_v<RowReference>,
                "Inheritance used without trivial destruction");

  class ConstIterator;
  class ConstIterator : public macros_internal::AbstractConstIterator<
    ConstIterator, SurfaceFlingerTransactionFlagTable, RowNumber, ConstRowReference> {
   public:
    ColumnType::id::type id() const {
      const auto& col = table()->id();
      return col.GetAtIdx(
        iterator_.StorageIndexForColumn(col.index_in_table()));
    }
    ColumnType::flags_id::type flags_id() const {
      const auto& col = table()->flags_id();
      return col.GetAtIdx(
        iterator_.StorageIndexForColumn(col.index_in_table()));
    }
    ColumnType::flag::type flag() const {
      const auto& col = table()->flag();
      return col.GetAtIdx(
        iterator_.StorageIndexForColumn(col.index_in_table()));
    }

   protected:
    explicit ConstIterator(const SurfaceFlingerTransactionFlagTable* table,
                           Table::Iterator iterator)
        : AbstractConstIterator(table, std::move(iterator)) {}

    uint32_t CurrentRowNumber() const {
      return iterator_.StorageIndexForLastOverlay();
    }

   private:
    friend class SurfaceFlingerTransactionFlagTable;
    friend class macros_internal::AbstractConstIterator<
      ConstIterator, SurfaceFlingerTransactionFlagTable, RowNumber, ConstRowReference>;
  };
  class Iterator : public ConstIterator {
    public:
     RowReference row_reference() const {
       return {const_cast<SurfaceFlingerTransactionFlagTable*>(table()), CurrentRowNumber()};
     }

    private:
     friend class SurfaceFlingerTransactionFlagTable;

     explicit Iterator(SurfaceFlingerTransactionFlagTable* table, Table::Iterator iterator)
        : ConstIterator(table, std::move(iterator)) {}
  };

  struct IdAndRow {
    Id id;
    uint32_t row;
    RowReference row_reference;
    RowNumber row_number;
  };

  static std::vector<ColumnLegacy> GetColumns(
      SurfaceFlingerTransactionFlagTable* self,
      const macros_internal::MacroTable* parent) {
    std::vector<ColumnLegacy> columns =
        CopyColumnsFromParentOrAddRootColumns(parent);
    uint32_t olay_idx = OverlayCount(parent);
    AddColumnToVector(columns, "flags_id", &self->flags_id_, ColumnFlag::flags_id,
                      static_cast<uint32_t>(columns.size()), olay_idx);
    AddColumnToVector(columns, "flag", &self->flag_, ColumnFlag::flag,
                      static_cast<uint32_t>(columns.size()), olay_idx);
    base::ignore_result(self);
    return columns;
  }

  PERFETTO_NO_INLINE explicit SurfaceFlingerTransactionFlagTable(StringPool* pool)
      : macros_internal::MacroTable(
          pool,
          GetColumns(this, nullptr),
          nullptr),
        flags_id_(ColumnStorage<ColumnType::flags_id::stored_type>::Create<false>()),
        flag_(ColumnStorage<ColumnType::flag::stored_type>::Create<false>())
,
        id_storage_layer_(new column::IdStorage()),
        flags_id_storage_layer_(
          new column::NumericStorage<ColumnType::flags_id::non_optional_stored_type>(
            &flags_id_.non_null_vector(),
            ColumnTypeHelper<ColumnType::flags_id::stored_type>::ToColumnType(),
            false)),
        flag_storage_layer_(
          new column::StringStorage(string_pool(), &flag_.vector()))
,
        flags_id_null_layer_(new column::NullOverlay(flags_id_.bv())) {
    static_assert(
        ColumnLegacy::IsFlagsAndTypeValid<ColumnType::flags_id::stored_type>(
          ColumnFlag::flags_id),
        "Column type and flag combination is not valid");
      static_assert(
        ColumnLegacy::IsFlagsAndTypeValid<ColumnType::flag::stored_type>(
          ColumnFlag::flag),
        "Column type and flag combination is not valid");
    OnConstructionCompletedRegularConstructor(
      {id_storage_layer_,flags_id_storage_layer_,flag_storage_layer_},
      {{},flags_id_null_layer_,{}});
  }
  ~SurfaceFlingerTransactionFlagTable() override;

  static const char* Name() { return "__intrinsic_surfaceflinger_transaction_flag"; }

  static Table::Schema ComputeStaticSchema() {
    Table::Schema schema;
    schema.columns.emplace_back(Table::Schema::Column{
        "id", SqlValue::Type::kLong, true, true, false, false});
    schema.columns.emplace_back(Table::Schema::Column{
        "flags_id", ColumnType::flags_id::SqlValueType(), false,
        false,
        false,
        false});
    schema.columns.emplace_back(Table::Schema::Column{
        "flag", ColumnType::flag::SqlValueType(), false,
        false,
        false,
        false});
    return schema;
  }

  ConstIterator IterateRows() const {
    return ConstIterator(this, Table::IterateRows());
  }

  Iterator IterateRows() { return Iterator(this, Table::IterateRows()); }

  ConstIterator FilterToIterator(const Query& q) const {
    return ConstIterator(this, QueryToIterator(q));
  }

  Iterator FilterToIterator(const Query& q) {
    return Iterator(this, QueryToIterator(q));
  }

  void ShrinkToFit() {
    flags_id_.ShrinkToFit();
    flag_.ShrinkToFit();
  }

  ConstRowReference operator[](uint32_t r) const {
    return ConstRowReference(this, r);
  }
  RowReference operator[](uint32_t r) { return RowReference(this, r); }
  ConstRowReference operator[](RowNumber r) const {
    return ConstRowReference(this, r.row_number());
  }
  RowReference operator[](RowNumber r) {
    return RowReference(this, r.row_number());
  }

  std::optional<ConstRowReference> FindById(Id find_id) const {
    std::optional<uint32_t> row = id().IndexOf(find_id);
    return row ? std::make_optional(ConstRowReference(this, *row))
               : std::nullopt;
  }

  std::optional<RowReference> FindById(Id find_id) {
    std::optional<uint32_t> row = id().IndexOf(find_id);
    return row ? std::make_optional(RowReference(this, *row)) : std::nullopt;
  }

  IdAndRow Insert(const Row& row) {
    uint32_t row_number = row_count();
    Id id = Id{row_number};
    mutable_flags_id()->Append(row.flags_id);
    mutable_flag()->Append(row.flag);
    UpdateSelfOverlayAfterInsert();
    return IdAndRow{id, row_number, RowReference(this, row_number),
                     RowNumber(row_number)};
  }

  

  const IdColumn<SurfaceFlingerTransactionFlagTable::Id>& id() const {
    return static_cast<const ColumnType::id&>(columns()[ColumnIndex::id]);
  }
  const TypedColumn<std::optional<uint32_t>>& flags_id() const {
    return static_cast<const ColumnType::flags_id&>(columns()[ColumnIndex::flags_id]);
  }
  const TypedColumn<std::optional<StringPool::Id>>& flag() const {
    return static_cast<const ColumnType::flag&>(columns()[ColumnIndex::flag]);
  }

  TypedColumn<std::optional<uint32_t>>* mutable_flags_id() {
    return static_cast<ColumnType::flags_id*>(
        GetColumn(ColumnIndex::flags_id));
  }
  TypedColumn<std::optional<StringPool::Id>>* mutable_flag() {
    return static_cast<ColumnType::flag*>(
        GetColumn(ColumnIndex::flag));
  }

 private:
  
  
  ColumnStorage<ColumnType::flags_id::stored_type> flags_id_;
  ColumnStorage<ColumnType::flag::stored_type> flag_;

  RefPtr<column::StorageLayer> id_storage_layer_;
  RefPtr<column::StorageLayer> flags_id_storage_layer_;
  RefPtr<column::StorageLayer> flag_storage_layer_;

  RefPtr<column::OverlayLayer> flags_id_null_layer_;
};
  

class ViewCaptureTable : public macros_internal::MacroTable {
 public:
  static constexpr uint32_t kColumnCount = 4;

  struct Id : public BaseId {
    Id() = default;
    explicit constexpr Id(uint32_t v) : BaseId(v) {}
  };
  static_assert(std::is_trivially_destructible_v<Id>,
                "Inheritance used without trivial destruction");
    
  struct ColumnIndex {
    static constexpr uint32_t id = 0;
    static constexpr uint32_t ts = 1;
    static constexpr uint32_t arg_set_id = 2;
    static constexpr uint32_t base64_proto_id = 3;
  };
  struct ColumnType {
    using id = IdColumn<ViewCaptureTable::Id>;
    using ts = TypedColumn<int64_t>;
    using arg_set_id = TypedColumn<std::optional<uint32_t>>;
    using base64_proto_id = TypedColumn<std::optional<uint32_t>>;
  };
  struct Row : public macros_internal::RootParentTable::Row {
    Row(int64_t in_ts = {},
        std::optional<uint32_t> in_arg_set_id = {},
        std::optional<uint32_t> in_base64_proto_id = {},
        std::nullptr_t = nullptr)
        : macros_internal::RootParentTable::Row(),
          ts(in_ts),
          arg_set_id(in_arg_set_id),
          base64_proto_id(in_base64_proto_id) {}
    int64_t ts;
    std::optional<uint32_t> arg_set_id;
    std::optional<uint32_t> base64_proto_id;

    bool operator==(const ViewCaptureTable::Row& other) const {
      return ColumnType::ts::Equals(ts, other.ts) &&
       ColumnType::arg_set_id::Equals(arg_set_id, other.arg_set_id) &&
       ColumnType::base64_proto_id::Equals(base64_proto_id, other.base64_proto_id);
    }
  };
  struct ColumnFlag {
    static constexpr uint32_t ts = static_cast<uint32_t>(ColumnLegacy::Flag::kSorted) | ColumnType::ts::default_flags();
    static constexpr uint32_t arg_set_id = ColumnType::arg_set_id::default_flags();
    static constexpr uint32_t base64_proto_id = ColumnType::base64_proto_id::default_flags();
  };

  class RowNumber;
  class ConstRowReference;
  class RowReference;

  class RowNumber : public macros_internal::AbstractRowNumber<
      ViewCaptureTable, ConstRowReference, RowReference> {
   public:
    explicit RowNumber(uint32_t row_number)
        : AbstractRowNumber(row_number) {}
  };
  static_assert(std::is_trivially_destructible_v<RowNumber>,
                "Inheritance used without trivial destruction");

  class ConstRowReference : public macros_internal::AbstractConstRowReference<
    ViewCaptureTable, RowNumber> {
   public:
    ConstRowReference(const ViewCaptureTable* table, uint32_t row_number)
        : AbstractConstRowReference(table, row_number) {}

    ColumnType::id::type id() const {
      return table()->id()[row_number_];
    }
    ColumnType::ts::type ts() const {
      return table()->ts()[row_number_];
    }
    ColumnType::arg_set_id::type arg_set_id() const {
      return table()->arg_set_id()[row_number_];
    }
    ColumnType::base64_proto_id::type base64_proto_id() const {
      return table()->base64_proto_id()[row_number_];
    }
  };
  static_assert(std::is_trivially_destructible_v<ConstRowReference>,
                "Inheritance used without trivial destruction");
  class RowReference : public ConstRowReference {
   public:
    RowReference(const ViewCaptureTable* table, uint32_t row_number)
        : ConstRowReference(table, row_number) {}

    void set_ts(
        ColumnType::ts::non_optional_type v) {
      return mutable_table()->mutable_ts()->Set(row_number_, v);
    }
    void set_arg_set_id(
        ColumnType::arg_set_id::non_optional_type v) {
      return mutable_table()->mutable_arg_set_id()->Set(row_number_, v);
    }
    void set_base64_proto_id(
        ColumnType::base64_proto_id::non_optional_type v) {
      return mutable_table()->mutable_base64_proto_id()->Set(row_number_, v);
    }

   private:
    ViewCaptureTable* mutable_table() const {
      return const_cast<ViewCaptureTable*>(table());
    }
  };
  static_assert(std::is_trivially_destructible_v<RowReference>,
                "Inheritance used without trivial destruction");

  class ConstIterator;
  class ConstIterator : public macros_internal::AbstractConstIterator<
    ConstIterator, ViewCaptureTable, RowNumber, ConstRowReference> {
   public:
    ColumnType::id::type id() const {
      const auto& col = table()->id();
      return col.GetAtIdx(
        iterator_.StorageIndexForColumn(col.index_in_table()));
    }
    ColumnType::ts::type ts() const {
      const auto& col = table()->ts();
      return col.GetAtIdx(
        iterator_.StorageIndexForColumn(col.index_in_table()));
    }
    ColumnType::arg_set_id::type arg_set_id() const {
      const auto& col = table()->arg_set_id();
      return col.GetAtIdx(
        iterator_.StorageIndexForColumn(col.index_in_table()));
    }
    ColumnType::base64_proto_id::type base64_proto_id() const {
      const auto& col = table()->base64_proto_id();
      return col.GetAtIdx(
        iterator_.StorageIndexForColumn(col.index_in_table()));
    }

   protected:
    explicit ConstIterator(const ViewCaptureTable* table,
                           Table::Iterator iterator)
        : AbstractConstIterator(table, std::move(iterator)) {}

    uint32_t CurrentRowNumber() const {
      return iterator_.StorageIndexForLastOverlay();
    }

   private:
    friend class ViewCaptureTable;
    friend class macros_internal::AbstractConstIterator<
      ConstIterator, ViewCaptureTable, RowNumber, ConstRowReference>;
  };
  class Iterator : public ConstIterator {
    public:
     RowReference row_reference() const {
       return {const_cast<ViewCaptureTable*>(table()), CurrentRowNumber()};
     }

    private:
     friend class ViewCaptureTable;

     explicit Iterator(ViewCaptureTable* table, Table::Iterator iterator)
        : ConstIterator(table, std::move(iterator)) {}
  };

  struct IdAndRow {
    Id id;
    uint32_t row;
    RowReference row_reference;
    RowNumber row_number;
  };

  static std::vector<ColumnLegacy> GetColumns(
      ViewCaptureTable* self,
      const macros_internal::MacroTable* parent) {
    std::vector<ColumnLegacy> columns =
        CopyColumnsFromParentOrAddRootColumns(parent);
    uint32_t olay_idx = OverlayCount(parent);
    AddColumnToVector(columns, "ts", &self->ts_, ColumnFlag::ts,
                      static_cast<uint32_t>(columns.size()), olay_idx);
    AddColumnToVector(columns, "arg_set_id", &self->arg_set_id_, ColumnFlag::arg_set_id,
                      static_cast<uint32_t>(columns.size()), olay_idx);
    AddColumnToVector(columns, "base64_proto_id", &self->base64_proto_id_, ColumnFlag::base64_proto_id,
                      static_cast<uint32_t>(columns.size()), olay_idx);
    base::ignore_result(self);
    return columns;
  }

  PERFETTO_NO_INLINE explicit ViewCaptureTable(StringPool* pool)
      : macros_internal::MacroTable(
          pool,
          GetColumns(this, nullptr),
          nullptr),
        ts_(ColumnStorage<ColumnType::ts::stored_type>::Create<false>()),
        arg_set_id_(ColumnStorage<ColumnType::arg_set_id::stored_type>::Create<false>()),
        base64_proto_id_(ColumnStorage<ColumnType::base64_proto_id::stored_type>::Create<false>())
,
        id_storage_layer_(new column::IdStorage()),
        ts_storage_layer_(
        new column::NumericStorage<ColumnType::ts::non_optional_stored_type>(
          &ts_.vector(),
          ColumnTypeHelper<ColumnType::ts::stored_type>::ToColumnType(),
          true)),
        arg_set_id_storage_layer_(
          new column::NumericStorage<ColumnType::arg_set_id::non_optional_stored_type>(
            &arg_set_id_.non_null_vector(),
            ColumnTypeHelper<ColumnType::arg_set_id::stored_type>::ToColumnType(),
            false)),
        base64_proto_id_storage_layer_(
          new column::NumericStorage<ColumnType::base64_proto_id::non_optional_stored_type>(
            &base64_proto_id_.non_null_vector(),
            ColumnTypeHelper<ColumnType::base64_proto_id::stored_type>::ToColumnType(),
            false))
,
        arg_set_id_null_layer_(new column::NullOverlay(arg_set_id_.bv())),
        base64_proto_id_null_layer_(new column::NullOverlay(base64_proto_id_.bv())) {
    static_assert(
        ColumnLegacy::IsFlagsAndTypeValid<ColumnType::ts::stored_type>(
          ColumnFlag::ts),
        "Column type and flag combination is not valid");
      static_assert(
        ColumnLegacy::IsFlagsAndTypeValid<ColumnType::arg_set_id::stored_type>(
          ColumnFlag::arg_set_id),
        "Column type and flag combination is not valid");
      static_assert(
        ColumnLegacy::IsFlagsAndTypeValid<ColumnType::base64_proto_id::stored_type>(
          ColumnFlag::base64_proto_id),
        "Column type and flag combination is not valid");
    OnConstructionCompletedRegularConstructor(
      {id_storage_layer_,ts_storage_layer_,arg_set_id_storage_layer_,base64_proto_id_storage_layer_},
      {{},{},arg_set_id_null_layer_,base64_proto_id_null_layer_});
  }
  ~ViewCaptureTable() override;

  static const char* Name() { return "__intrinsic_viewcapture"; }

  static Table::Schema ComputeStaticSchema() {
    Table::Schema schema;
    schema.columns.emplace_back(Table::Schema::Column{
        "id", SqlValue::Type::kLong, true, true, false, false});
    schema.columns.emplace_back(Table::Schema::Column{
        "ts", ColumnType::ts::SqlValueType(), false,
        true,
        false,
        false});
    schema.columns.emplace_back(Table::Schema::Column{
        "arg_set_id", ColumnType::arg_set_id::SqlValueType(), false,
        false,
        false,
        false});
    schema.columns.emplace_back(Table::Schema::Column{
        "base64_proto_id", ColumnType::base64_proto_id::SqlValueType(), false,
        false,
        false,
        false});
    return schema;
  }

  ConstIterator IterateRows() const {
    return ConstIterator(this, Table::IterateRows());
  }

  Iterator IterateRows() { return Iterator(this, Table::IterateRows()); }

  ConstIterator FilterToIterator(const Query& q) const {
    return ConstIterator(this, QueryToIterator(q));
  }

  Iterator FilterToIterator(const Query& q) {
    return Iterator(this, QueryToIterator(q));
  }

  void ShrinkToFit() {
    ts_.ShrinkToFit();
    arg_set_id_.ShrinkToFit();
    base64_proto_id_.ShrinkToFit();
  }

  ConstRowReference operator[](uint32_t r) const {
    return ConstRowReference(this, r);
  }
  RowReference operator[](uint32_t r) { return RowReference(this, r); }
  ConstRowReference operator[](RowNumber r) const {
    return ConstRowReference(this, r.row_number());
  }
  RowReference operator[](RowNumber r) {
    return RowReference(this, r.row_number());
  }

  std::optional<ConstRowReference> FindById(Id find_id) const {
    std::optional<uint32_t> row = id().IndexOf(find_id);
    return row ? std::make_optional(ConstRowReference(this, *row))
               : std::nullopt;
  }

  std::optional<RowReference> FindById(Id find_id) {
    std::optional<uint32_t> row = id().IndexOf(find_id);
    return row ? std::make_optional(RowReference(this, *row)) : std::nullopt;
  }

  IdAndRow Insert(const Row& row) {
    uint32_t row_number = row_count();
    Id id = Id{row_number};
    mutable_ts()->Append(row.ts);
    mutable_arg_set_id()->Append(row.arg_set_id);
    mutable_base64_proto_id()->Append(row.base64_proto_id);
    UpdateSelfOverlayAfterInsert();
    return IdAndRow{id, row_number, RowReference(this, row_number),
                     RowNumber(row_number)};
  }

  

  const IdColumn<ViewCaptureTable::Id>& id() const {
    return static_cast<const ColumnType::id&>(columns()[ColumnIndex::id]);
  }
  const TypedColumn<int64_t>& ts() const {
    return static_cast<const ColumnType::ts&>(columns()[ColumnIndex::ts]);
  }
  const TypedColumn<std::optional<uint32_t>>& arg_set_id() const {
    return static_cast<const ColumnType::arg_set_id&>(columns()[ColumnIndex::arg_set_id]);
  }
  const TypedColumn<std::optional<uint32_t>>& base64_proto_id() const {
    return static_cast<const ColumnType::base64_proto_id&>(columns()[ColumnIndex::base64_proto_id]);
  }

  TypedColumn<int64_t>* mutable_ts() {
    return static_cast<ColumnType::ts*>(
        GetColumn(ColumnIndex::ts));
  }
  TypedColumn<std::optional<uint32_t>>* mutable_arg_set_id() {
    return static_cast<ColumnType::arg_set_id*>(
        GetColumn(ColumnIndex::arg_set_id));
  }
  TypedColumn<std::optional<uint32_t>>* mutable_base64_proto_id() {
    return static_cast<ColumnType::base64_proto_id*>(
        GetColumn(ColumnIndex::base64_proto_id));
  }

 private:
  
  
  ColumnStorage<ColumnType::ts::stored_type> ts_;
  ColumnStorage<ColumnType::arg_set_id::stored_type> arg_set_id_;
  ColumnStorage<ColumnType::base64_proto_id::stored_type> base64_proto_id_;

  RefPtr<column::StorageLayer> id_storage_layer_;
  RefPtr<column::StorageLayer> ts_storage_layer_;
  RefPtr<column::StorageLayer> arg_set_id_storage_layer_;
  RefPtr<column::StorageLayer> base64_proto_id_storage_layer_;

  RefPtr<column::OverlayLayer> arg_set_id_null_layer_;
  RefPtr<column::OverlayLayer> base64_proto_id_null_layer_;
};
  

class ViewCaptureViewTable : public macros_internal::MacroTable {
 public:
  static constexpr uint32_t kColumnCount = 4;

  struct Id : public BaseId {
    Id() = default;
    explicit constexpr Id(uint32_t v) : BaseId(v) {}
  };
  static_assert(std::is_trivially_destructible_v<Id>,
                "Inheritance used without trivial destruction");
    
  struct ColumnIndex {
    static constexpr uint32_t id = 0;
    static constexpr uint32_t snapshot_id = 1;
    static constexpr uint32_t arg_set_id = 2;
    static constexpr uint32_t base64_proto_id = 3;
  };
  struct ColumnType {
    using id = IdColumn<ViewCaptureViewTable::Id>;
    using snapshot_id = TypedColumn<ViewCaptureTable::Id>;
    using arg_set_id = TypedColumn<std::optional<uint32_t>>;
    using base64_proto_id = TypedColumn<std::optional<uint32_t>>;
  };
  struct Row : public macros_internal::RootParentTable::Row {
    Row(ViewCaptureTable::Id in_snapshot_id = {},
        std::optional<uint32_t> in_arg_set_id = {},
        std::optional<uint32_t> in_base64_proto_id = {},
        std::nullptr_t = nullptr)
        : macros_internal::RootParentTable::Row(),
          snapshot_id(in_snapshot_id),
          arg_set_id(in_arg_set_id),
          base64_proto_id(in_base64_proto_id) {}
    ViewCaptureTable::Id snapshot_id;
    std::optional<uint32_t> arg_set_id;
    std::optional<uint32_t> base64_proto_id;

    bool operator==(const ViewCaptureViewTable::Row& other) const {
      return ColumnType::snapshot_id::Equals(snapshot_id, other.snapshot_id) &&
       ColumnType::arg_set_id::Equals(arg_set_id, other.arg_set_id) &&
       ColumnType::base64_proto_id::Equals(base64_proto_id, other.base64_proto_id);
    }
  };
  struct ColumnFlag {
    static constexpr uint32_t snapshot_id = ColumnType::snapshot_id::default_flags();
    static constexpr uint32_t arg_set_id = ColumnType::arg_set_id::default_flags();
    static constexpr uint32_t base64_proto_id = ColumnType::base64_proto_id::default_flags();
  };

  class RowNumber;
  class ConstRowReference;
  class RowReference;

  class RowNumber : public macros_internal::AbstractRowNumber<
      ViewCaptureViewTable, ConstRowReference, RowReference> {
   public:
    explicit RowNumber(uint32_t row_number)
        : AbstractRowNumber(row_number) {}
  };
  static_assert(std::is_trivially_destructible_v<RowNumber>,
                "Inheritance used without trivial destruction");

  class ConstRowReference : public macros_internal::AbstractConstRowReference<
    ViewCaptureViewTable, RowNumber> {
   public:
    ConstRowReference(const ViewCaptureViewTable* table, uint32_t row_number)
        : AbstractConstRowReference(table, row_number) {}

    ColumnType::id::type id() const {
      return table()->id()[row_number_];
    }
    ColumnType::snapshot_id::type snapshot_id() const {
      return table()->snapshot_id()[row_number_];
    }
    ColumnType::arg_set_id::type arg_set_id() const {
      return table()->arg_set_id()[row_number_];
    }
    ColumnType::base64_proto_id::type base64_proto_id() const {
      return table()->base64_proto_id()[row_number_];
    }
  };
  static_assert(std::is_trivially_destructible_v<ConstRowReference>,
                "Inheritance used without trivial destruction");
  class RowReference : public ConstRowReference {
   public:
    RowReference(const ViewCaptureViewTable* table, uint32_t row_number)
        : ConstRowReference(table, row_number) {}

    void set_snapshot_id(
        ColumnType::snapshot_id::non_optional_type v) {
      return mutable_table()->mutable_snapshot_id()->Set(row_number_, v);
    }
    void set_arg_set_id(
        ColumnType::arg_set_id::non_optional_type v) {
      return mutable_table()->mutable_arg_set_id()->Set(row_number_, v);
    }
    void set_base64_proto_id(
        ColumnType::base64_proto_id::non_optional_type v) {
      return mutable_table()->mutable_base64_proto_id()->Set(row_number_, v);
    }

   private:
    ViewCaptureViewTable* mutable_table() const {
      return const_cast<ViewCaptureViewTable*>(table());
    }
  };
  static_assert(std::is_trivially_destructible_v<RowReference>,
                "Inheritance used without trivial destruction");

  class ConstIterator;
  class ConstIterator : public macros_internal::AbstractConstIterator<
    ConstIterator, ViewCaptureViewTable, RowNumber, ConstRowReference> {
   public:
    ColumnType::id::type id() const {
      const auto& col = table()->id();
      return col.GetAtIdx(
        iterator_.StorageIndexForColumn(col.index_in_table()));
    }
    ColumnType::snapshot_id::type snapshot_id() const {
      const auto& col = table()->snapshot_id();
      return col.GetAtIdx(
        iterator_.StorageIndexForColumn(col.index_in_table()));
    }
    ColumnType::arg_set_id::type arg_set_id() const {
      const auto& col = table()->arg_set_id();
      return col.GetAtIdx(
        iterator_.StorageIndexForColumn(col.index_in_table()));
    }
    ColumnType::base64_proto_id::type base64_proto_id() const {
      const auto& col = table()->base64_proto_id();
      return col.GetAtIdx(
        iterator_.StorageIndexForColumn(col.index_in_table()));
    }

   protected:
    explicit ConstIterator(const ViewCaptureViewTable* table,
                           Table::Iterator iterator)
        : AbstractConstIterator(table, std::move(iterator)) {}

    uint32_t CurrentRowNumber() const {
      return iterator_.StorageIndexForLastOverlay();
    }

   private:
    friend class ViewCaptureViewTable;
    friend class macros_internal::AbstractConstIterator<
      ConstIterator, ViewCaptureViewTable, RowNumber, ConstRowReference>;
  };
  class Iterator : public ConstIterator {
    public:
     RowReference row_reference() const {
       return {const_cast<ViewCaptureViewTable*>(table()), CurrentRowNumber()};
     }

    private:
     friend class ViewCaptureViewTable;

     explicit Iterator(ViewCaptureViewTable* table, Table::Iterator iterator)
        : ConstIterator(table, std::move(iterator)) {}
  };

  struct IdAndRow {
    Id id;
    uint32_t row;
    RowReference row_reference;
    RowNumber row_number;
  };

  static std::vector<ColumnLegacy> GetColumns(
      ViewCaptureViewTable* self,
      const macros_internal::MacroTable* parent) {
    std::vector<ColumnLegacy> columns =
        CopyColumnsFromParentOrAddRootColumns(parent);
    uint32_t olay_idx = OverlayCount(parent);
    AddColumnToVector(columns, "snapshot_id", &self->snapshot_id_, ColumnFlag::snapshot_id,
                      static_cast<uint32_t>(columns.size()), olay_idx);
    AddColumnToVector(columns, "arg_set_id", &self->arg_set_id_, ColumnFlag::arg_set_id,
                      static_cast<uint32_t>(columns.size()), olay_idx);
    AddColumnToVector(columns, "base64_proto_id", &self->base64_proto_id_, ColumnFlag::base64_proto_id,
                      static_cast<uint32_t>(columns.size()), olay_idx);
    base::ignore_result(self);
    return columns;
  }

  PERFETTO_NO_INLINE explicit ViewCaptureViewTable(StringPool* pool)
      : macros_internal::MacroTable(
          pool,
          GetColumns(this, nullptr),
          nullptr),
        snapshot_id_(ColumnStorage<ColumnType::snapshot_id::stored_type>::Create<false>()),
        arg_set_id_(ColumnStorage<ColumnType::arg_set_id::stored_type>::Create<false>()),
        base64_proto_id_(ColumnStorage<ColumnType::base64_proto_id::stored_type>::Create<false>())
,
        id_storage_layer_(new column::IdStorage()),
        snapshot_id_storage_layer_(
        new column::NumericStorage<ColumnType::snapshot_id::non_optional_stored_type>(
          &snapshot_id_.vector(),
          ColumnTypeHelper<ColumnType::snapshot_id::stored_type>::ToColumnType(),
          false)),
        arg_set_id_storage_layer_(
          new column::NumericStorage<ColumnType::arg_set_id::non_optional_stored_type>(
            &arg_set_id_.non_null_vector(),
            ColumnTypeHelper<ColumnType::arg_set_id::stored_type>::ToColumnType(),
            false)),
        base64_proto_id_storage_layer_(
          new column::NumericStorage<ColumnType::base64_proto_id::non_optional_stored_type>(
            &base64_proto_id_.non_null_vector(),
            ColumnTypeHelper<ColumnType::base64_proto_id::stored_type>::ToColumnType(),
            false))
,
        arg_set_id_null_layer_(new column::NullOverlay(arg_set_id_.bv())),
        base64_proto_id_null_layer_(new column::NullOverlay(base64_proto_id_.bv())) {
    static_assert(
        ColumnLegacy::IsFlagsAndTypeValid<ColumnType::snapshot_id::stored_type>(
          ColumnFlag::snapshot_id),
        "Column type and flag combination is not valid");
      static_assert(
        ColumnLegacy::IsFlagsAndTypeValid<ColumnType::arg_set_id::stored_type>(
          ColumnFlag::arg_set_id),
        "Column type and flag combination is not valid");
      static_assert(
        ColumnLegacy::IsFlagsAndTypeValid<ColumnType::base64_proto_id::stored_type>(
          ColumnFlag::base64_proto_id),
        "Column type and flag combination is not valid");
    OnConstructionCompletedRegularConstructor(
      {id_storage_layer_,snapshot_id_storage_layer_,arg_set_id_storage_layer_,base64_proto_id_storage_layer_},
      {{},{},arg_set_id_null_layer_,base64_proto_id_null_layer_});
  }
  ~ViewCaptureViewTable() override;

  static const char* Name() { return "__intrinsic_viewcapture_view"; }

  static Table::Schema ComputeStaticSchema() {
    Table::Schema schema;
    schema.columns.emplace_back(Table::Schema::Column{
        "id", SqlValue::Type::kLong, true, true, false, false});
    schema.columns.emplace_back(Table::Schema::Column{
        "snapshot_id", ColumnType::snapshot_id::SqlValueType(), false,
        false,
        false,
        false});
    schema.columns.emplace_back(Table::Schema::Column{
        "arg_set_id", ColumnType::arg_set_id::SqlValueType(), false,
        false,
        false,
        false});
    schema.columns.emplace_back(Table::Schema::Column{
        "base64_proto_id", ColumnType::base64_proto_id::SqlValueType(), false,
        false,
        false,
        false});
    return schema;
  }

  ConstIterator IterateRows() const {
    return ConstIterator(this, Table::IterateRows());
  }

  Iterator IterateRows() { return Iterator(this, Table::IterateRows()); }

  ConstIterator FilterToIterator(const Query& q) const {
    return ConstIterator(this, QueryToIterator(q));
  }

  Iterator FilterToIterator(const Query& q) {
    return Iterator(this, QueryToIterator(q));
  }

  void ShrinkToFit() {
    snapshot_id_.ShrinkToFit();
    arg_set_id_.ShrinkToFit();
    base64_proto_id_.ShrinkToFit();
  }

  ConstRowReference operator[](uint32_t r) const {
    return ConstRowReference(this, r);
  }
  RowReference operator[](uint32_t r) { return RowReference(this, r); }
  ConstRowReference operator[](RowNumber r) const {
    return ConstRowReference(this, r.row_number());
  }
  RowReference operator[](RowNumber r) {
    return RowReference(this, r.row_number());
  }

  std::optional<ConstRowReference> FindById(Id find_id) const {
    std::optional<uint32_t> row = id().IndexOf(find_id);
    return row ? std::make_optional(ConstRowReference(this, *row))
               : std::nullopt;
  }

  std::optional<RowReference> FindById(Id find_id) {
    std::optional<uint32_t> row = id().IndexOf(find_id);
    return row ? std::make_optional(RowReference(this, *row)) : std::nullopt;
  }

  IdAndRow Insert(const Row& row) {
    uint32_t row_number = row_count();
    Id id = Id{row_number};
    mutable_snapshot_id()->Append(row.snapshot_id);
    mutable_arg_set_id()->Append(row.arg_set_id);
    mutable_base64_proto_id()->Append(row.base64_proto_id);
    UpdateSelfOverlayAfterInsert();
    return IdAndRow{id, row_number, RowReference(this, row_number),
                     RowNumber(row_number)};
  }

  

  const IdColumn<ViewCaptureViewTable::Id>& id() const {
    return static_cast<const ColumnType::id&>(columns()[ColumnIndex::id]);
  }
  const TypedColumn<ViewCaptureTable::Id>& snapshot_id() const {
    return static_cast<const ColumnType::snapshot_id&>(columns()[ColumnIndex::snapshot_id]);
  }
  const TypedColumn<std::optional<uint32_t>>& arg_set_id() const {
    return static_cast<const ColumnType::arg_set_id&>(columns()[ColumnIndex::arg_set_id]);
  }
  const TypedColumn<std::optional<uint32_t>>& base64_proto_id() const {
    return static_cast<const ColumnType::base64_proto_id&>(columns()[ColumnIndex::base64_proto_id]);
  }

  TypedColumn<ViewCaptureTable::Id>* mutable_snapshot_id() {
    return static_cast<ColumnType::snapshot_id*>(
        GetColumn(ColumnIndex::snapshot_id));
  }
  TypedColumn<std::optional<uint32_t>>* mutable_arg_set_id() {
    return static_cast<ColumnType::arg_set_id*>(
        GetColumn(ColumnIndex::arg_set_id));
  }
  TypedColumn<std::optional<uint32_t>>* mutable_base64_proto_id() {
    return static_cast<ColumnType::base64_proto_id*>(
        GetColumn(ColumnIndex::base64_proto_id));
  }

 private:
  
  
  ColumnStorage<ColumnType::snapshot_id::stored_type> snapshot_id_;
  ColumnStorage<ColumnType::arg_set_id::stored_type> arg_set_id_;
  ColumnStorage<ColumnType::base64_proto_id::stored_type> base64_proto_id_;

  RefPtr<column::StorageLayer> id_storage_layer_;
  RefPtr<column::StorageLayer> snapshot_id_storage_layer_;
  RefPtr<column::StorageLayer> arg_set_id_storage_layer_;
  RefPtr<column::StorageLayer> base64_proto_id_storage_layer_;

  RefPtr<column::OverlayLayer> arg_set_id_null_layer_;
  RefPtr<column::OverlayLayer> base64_proto_id_null_layer_;
};
  

class ViewCaptureInternedDataTable : public macros_internal::MacroTable {
 public:
  static constexpr uint32_t kColumnCount = 5;

  struct Id : public BaseId {
    Id() = default;
    explicit constexpr Id(uint32_t v) : BaseId(v) {}
  };
  static_assert(std::is_trivially_destructible_v<Id>,
                "Inheritance used without trivial destruction");
    
  struct ColumnIndex {
    static constexpr uint32_t id = 0;
    static constexpr uint32_t base64_proto_id = 1;
    static constexpr uint32_t flat_key = 2;
    static constexpr uint32_t iid = 3;
    static constexpr uint32_t deinterned_value = 4;
  };
  struct ColumnType {
    using id = IdColumn<ViewCaptureInternedDataTable::Id>;
    using base64_proto_id = TypedColumn<uint32_t>;
    using flat_key = TypedColumn<StringPool::Id>;
    using iid = TypedColumn<int64_t>;
    using deinterned_value = TypedColumn<StringPool::Id>;
  };
  struct Row : public macros_internal::RootParentTable::Row {
    Row(uint32_t in_base64_proto_id = {},
        StringPool::Id in_flat_key = {},
        int64_t in_iid = {},
        StringPool::Id in_deinterned_value = {},
        std::nullptr_t = nullptr)
        : macros_internal::RootParentTable::Row(),
          base64_proto_id(in_base64_proto_id),
          flat_key(in_flat_key),
          iid(in_iid),
          deinterned_value(in_deinterned_value) {}
    uint32_t base64_proto_id;
    StringPool::Id flat_key;
    int64_t iid;
    StringPool::Id deinterned_value;

    bool operator==(const ViewCaptureInternedDataTable::Row& other) const {
      return ColumnType::base64_proto_id::Equals(base64_proto_id, other.base64_proto_id) &&
       ColumnType::flat_key::Equals(flat_key, other.flat_key) &&
       ColumnType::iid::Equals(iid, other.iid) &&
       ColumnType::deinterned_value::Equals(deinterned_value, other.deinterned_value);
    }
  };
  struct ColumnFlag {
    static constexpr uint32_t base64_proto_id = ColumnType::base64_proto_id::default_flags();
    static constexpr uint32_t flat_key = ColumnType::flat_key::default_flags();
    static constexpr uint32_t iid = ColumnType::iid::default_flags();
    static constexpr uint32_t deinterned_value = ColumnType::deinterned_value::default_flags();
  };

  class RowNumber;
  class ConstRowReference;
  class RowReference;

  class RowNumber : public macros_internal::AbstractRowNumber<
      ViewCaptureInternedDataTable, ConstRowReference, RowReference> {
   public:
    explicit RowNumber(uint32_t row_number)
        : AbstractRowNumber(row_number) {}
  };
  static_assert(std::is_trivially_destructible_v<RowNumber>,
                "Inheritance used without trivial destruction");

  class ConstRowReference : public macros_internal::AbstractConstRowReference<
    ViewCaptureInternedDataTable, RowNumber> {
   public:
    ConstRowReference(const ViewCaptureInternedDataTable* table, uint32_t row_number)
        : AbstractConstRowReference(table, row_number) {}

    ColumnType::id::type id() const {
      return table()->id()[row_number_];
    }
    ColumnType::base64_proto_id::type base64_proto_id() const {
      return table()->base64_proto_id()[row_number_];
    }
    ColumnType::flat_key::type flat_key() const {
      return table()->flat_key()[row_number_];
    }
    ColumnType::iid::type iid() const {
      return table()->iid()[row_number_];
    }
    ColumnType::deinterned_value::type deinterned_value() const {
      return table()->deinterned_value()[row_number_];
    }
  };
  static_assert(std::is_trivially_destructible_v<ConstRowReference>,
                "Inheritance used without trivial destruction");
  class RowReference : public ConstRowReference {
   public:
    RowReference(const ViewCaptureInternedDataTable* table, uint32_t row_number)
        : ConstRowReference(table, row_number) {}

    void set_base64_proto_id(
        ColumnType::base64_proto_id::non_optional_type v) {
      return mutable_table()->mutable_base64_proto_id()->Set(row_number_, v);
    }
    void set_flat_key(
        ColumnType::flat_key::non_optional_type v) {
      return mutable_table()->mutable_flat_key()->Set(row_number_, v);
    }
    void set_iid(
        ColumnType::iid::non_optional_type v) {
      return mutable_table()->mutable_iid()->Set(row_number_, v);
    }
    void set_deinterned_value(
        ColumnType::deinterned_value::non_optional_type v) {
      return mutable_table()->mutable_deinterned_value()->Set(row_number_, v);
    }

   private:
    ViewCaptureInternedDataTable* mutable_table() const {
      return const_cast<ViewCaptureInternedDataTable*>(table());
    }
  };
  static_assert(std::is_trivially_destructible_v<RowReference>,
                "Inheritance used without trivial destruction");

  class ConstIterator;
  class ConstIterator : public macros_internal::AbstractConstIterator<
    ConstIterator, ViewCaptureInternedDataTable, RowNumber, ConstRowReference> {
   public:
    ColumnType::id::type id() const {
      const auto& col = table()->id();
      return col.GetAtIdx(
        iterator_.StorageIndexForColumn(col.index_in_table()));
    }
    ColumnType::base64_proto_id::type base64_proto_id() const {
      const auto& col = table()->base64_proto_id();
      return col.GetAtIdx(
        iterator_.StorageIndexForColumn(col.index_in_table()));
    }
    ColumnType::flat_key::type flat_key() const {
      const auto& col = table()->flat_key();
      return col.GetAtIdx(
        iterator_.StorageIndexForColumn(col.index_in_table()));
    }
    ColumnType::iid::type iid() const {
      const auto& col = table()->iid();
      return col.GetAtIdx(
        iterator_.StorageIndexForColumn(col.index_in_table()));
    }
    ColumnType::deinterned_value::type deinterned_value() const {
      const auto& col = table()->deinterned_value();
      return col.GetAtIdx(
        iterator_.StorageIndexForColumn(col.index_in_table()));
    }

   protected:
    explicit ConstIterator(const ViewCaptureInternedDataTable* table,
                           Table::Iterator iterator)
        : AbstractConstIterator(table, std::move(iterator)) {}

    uint32_t CurrentRowNumber() const {
      return iterator_.StorageIndexForLastOverlay();
    }

   private:
    friend class ViewCaptureInternedDataTable;
    friend class macros_internal::AbstractConstIterator<
      ConstIterator, ViewCaptureInternedDataTable, RowNumber, ConstRowReference>;
  };
  class Iterator : public ConstIterator {
    public:
     RowReference row_reference() const {
       return {const_cast<ViewCaptureInternedDataTable*>(table()), CurrentRowNumber()};
     }

    private:
     friend class ViewCaptureInternedDataTable;

     explicit Iterator(ViewCaptureInternedDataTable* table, Table::Iterator iterator)
        : ConstIterator(table, std::move(iterator)) {}
  };

  struct IdAndRow {
    Id id;
    uint32_t row;
    RowReference row_reference;
    RowNumber row_number;
  };

  static std::vector<ColumnLegacy> GetColumns(
      ViewCaptureInternedDataTable* self,
      const macros_internal::MacroTable* parent) {
    std::vector<ColumnLegacy> columns =
        CopyColumnsFromParentOrAddRootColumns(parent);
    uint32_t olay_idx = OverlayCount(parent);
    AddColumnToVector(columns, "base64_proto_id", &self->base64_proto_id_, ColumnFlag::base64_proto_id,
                      static_cast<uint32_t>(columns.size()), olay_idx);
    AddColumnToVector(columns, "flat_key", &self->flat_key_, ColumnFlag::flat_key,
                      static_cast<uint32_t>(columns.size()), olay_idx);
    AddColumnToVector(columns, "iid", &self->iid_, ColumnFlag::iid,
                      static_cast<uint32_t>(columns.size()), olay_idx);
    AddColumnToVector(columns, "deinterned_value", &self->deinterned_value_, ColumnFlag::deinterned_value,
                      static_cast<uint32_t>(columns.size()), olay_idx);
    base::ignore_result(self);
    return columns;
  }

  PERFETTO_NO_INLINE explicit ViewCaptureInternedDataTable(StringPool* pool)
      : macros_internal::MacroTable(
          pool,
          GetColumns(this, nullptr),
          nullptr),
        base64_proto_id_(ColumnStorage<ColumnType::base64_proto_id::stored_type>::Create<false>()),
        flat_key_(ColumnStorage<ColumnType::flat_key::stored_type>::Create<false>()),
        iid_(ColumnStorage<ColumnType::iid::stored_type>::Create<false>()),
        deinterned_value_(ColumnStorage<ColumnType::deinterned_value::stored_type>::Create<false>())
,
        id_storage_layer_(new column::IdStorage()),
        base64_proto_id_storage_layer_(
        new column::NumericStorage<ColumnType::base64_proto_id::non_optional_stored_type>(
          &base64_proto_id_.vector(),
          ColumnTypeHelper<ColumnType::base64_proto_id::stored_type>::ToColumnType(),
          false)),
        flat_key_storage_layer_(
          new column::StringStorage(string_pool(), &flat_key_.vector())),
        iid_storage_layer_(
        new column::NumericStorage<ColumnType::iid::non_optional_stored_type>(
          &iid_.vector(),
          ColumnTypeHelper<ColumnType::iid::stored_type>::ToColumnType(),
          false)),
        deinterned_value_storage_layer_(
          new column::StringStorage(string_pool(), &deinterned_value_.vector()))
         {
    static_assert(
        ColumnLegacy::IsFlagsAndTypeValid<ColumnType::base64_proto_id::stored_type>(
          ColumnFlag::base64_proto_id),
        "Column type and flag combination is not valid");
      static_assert(
        ColumnLegacy::IsFlagsAndTypeValid<ColumnType::flat_key::stored_type>(
          ColumnFlag::flat_key),
        "Column type and flag combination is not valid");
      static_assert(
        ColumnLegacy::IsFlagsAndTypeValid<ColumnType::iid::stored_type>(
          ColumnFlag::iid),
        "Column type and flag combination is not valid");
      static_assert(
        ColumnLegacy::IsFlagsAndTypeValid<ColumnType::deinterned_value::stored_type>(
          ColumnFlag::deinterned_value),
        "Column type and flag combination is not valid");
    OnConstructionCompletedRegularConstructor(
      {id_storage_layer_,base64_proto_id_storage_layer_,flat_key_storage_layer_,iid_storage_layer_,deinterned_value_storage_layer_},
      {{},{},{},{},{}});
  }
  ~ViewCaptureInternedDataTable() override;

  static const char* Name() { return "__intrinsic_viewcapture_interned_data"; }

  static Table::Schema ComputeStaticSchema() {
    Table::Schema schema;
    schema.columns.emplace_back(Table::Schema::Column{
        "id", SqlValue::Type::kLong, true, true, false, false});
    schema.columns.emplace_back(Table::Schema::Column{
        "base64_proto_id", ColumnType::base64_proto_id::SqlValueType(), false,
        false,
        false,
        false});
    schema.columns.emplace_back(Table::Schema::Column{
        "flat_key", ColumnType::flat_key::SqlValueType(), false,
        false,
        false,
        false});
    schema.columns.emplace_back(Table::Schema::Column{
        "iid", ColumnType::iid::SqlValueType(), false,
        false,
        false,
        false});
    schema.columns.emplace_back(Table::Schema::Column{
        "deinterned_value", ColumnType::deinterned_value::SqlValueType(), false,
        false,
        false,
        false});
    return schema;
  }

  ConstIterator IterateRows() const {
    return ConstIterator(this, Table::IterateRows());
  }

  Iterator IterateRows() { return Iterator(this, Table::IterateRows()); }

  ConstIterator FilterToIterator(const Query& q) const {
    return ConstIterator(this, QueryToIterator(q));
  }

  Iterator FilterToIterator(const Query& q) {
    return Iterator(this, QueryToIterator(q));
  }

  void ShrinkToFit() {
    base64_proto_id_.ShrinkToFit();
    flat_key_.ShrinkToFit();
    iid_.ShrinkToFit();
    deinterned_value_.ShrinkToFit();
  }

  ConstRowReference operator[](uint32_t r) const {
    return ConstRowReference(this, r);
  }
  RowReference operator[](uint32_t r) { return RowReference(this, r); }
  ConstRowReference operator[](RowNumber r) const {
    return ConstRowReference(this, r.row_number());
  }
  RowReference operator[](RowNumber r) {
    return RowReference(this, r.row_number());
  }

  std::optional<ConstRowReference> FindById(Id find_id) const {
    std::optional<uint32_t> row = id().IndexOf(find_id);
    return row ? std::make_optional(ConstRowReference(this, *row))
               : std::nullopt;
  }

  std::optional<RowReference> FindById(Id find_id) {
    std::optional<uint32_t> row = id().IndexOf(find_id);
    return row ? std::make_optional(RowReference(this, *row)) : std::nullopt;
  }

  IdAndRow Insert(const Row& row) {
    uint32_t row_number = row_count();
    Id id = Id{row_number};
    mutable_base64_proto_id()->Append(row.base64_proto_id);
    mutable_flat_key()->Append(row.flat_key);
    mutable_iid()->Append(row.iid);
    mutable_deinterned_value()->Append(row.deinterned_value);
    UpdateSelfOverlayAfterInsert();
    return IdAndRow{id, row_number, RowReference(this, row_number),
                     RowNumber(row_number)};
  }

  

  const IdColumn<ViewCaptureInternedDataTable::Id>& id() const {
    return static_cast<const ColumnType::id&>(columns()[ColumnIndex::id]);
  }
  const TypedColumn<uint32_t>& base64_proto_id() const {
    return static_cast<const ColumnType::base64_proto_id&>(columns()[ColumnIndex::base64_proto_id]);
  }
  const TypedColumn<StringPool::Id>& flat_key() const {
    return static_cast<const ColumnType::flat_key&>(columns()[ColumnIndex::flat_key]);
  }
  const TypedColumn<int64_t>& iid() const {
    return static_cast<const ColumnType::iid&>(columns()[ColumnIndex::iid]);
  }
  const TypedColumn<StringPool::Id>& deinterned_value() const {
    return static_cast<const ColumnType::deinterned_value&>(columns()[ColumnIndex::deinterned_value]);
  }

  TypedColumn<uint32_t>* mutable_base64_proto_id() {
    return static_cast<ColumnType::base64_proto_id*>(
        GetColumn(ColumnIndex::base64_proto_id));
  }
  TypedColumn<StringPool::Id>* mutable_flat_key() {
    return static_cast<ColumnType::flat_key*>(
        GetColumn(ColumnIndex::flat_key));
  }
  TypedColumn<int64_t>* mutable_iid() {
    return static_cast<ColumnType::iid*>(
        GetColumn(ColumnIndex::iid));
  }
  TypedColumn<StringPool::Id>* mutable_deinterned_value() {
    return static_cast<ColumnType::deinterned_value*>(
        GetColumn(ColumnIndex::deinterned_value));
  }

 private:
  
  
  ColumnStorage<ColumnType::base64_proto_id::stored_type> base64_proto_id_;
  ColumnStorage<ColumnType::flat_key::stored_type> flat_key_;
  ColumnStorage<ColumnType::iid::stored_type> iid_;
  ColumnStorage<ColumnType::deinterned_value::stored_type> deinterned_value_;

  RefPtr<column::StorageLayer> id_storage_layer_;
  RefPtr<column::StorageLayer> base64_proto_id_storage_layer_;
  RefPtr<column::StorageLayer> flat_key_storage_layer_;
  RefPtr<column::StorageLayer> iid_storage_layer_;
  RefPtr<column::StorageLayer> deinterned_value_storage_layer_;

  
};
  

class WindowManagerShellTransitionsTable : public macros_internal::MacroTable {
 public:
  static constexpr uint32_t kColumnCount = 11;

  struct Id : public BaseId {
    Id() = default;
    explicit constexpr Id(uint32_t v) : BaseId(v) {}
  };
  static_assert(std::is_trivially_destructible_v<Id>,
                "Inheritance used without trivial destruction");
    
  struct ColumnIndex {
    static constexpr uint32_t id = 0;
    static constexpr uint32_t ts = 1;
    static constexpr uint32_t transition_id = 2;
    static constexpr uint32_t arg_set_id = 3;
    static constexpr uint32_t transition_type = 4;
    static constexpr uint32_t send_time_ns = 5;
    static constexpr uint32_t dispatch_time_ns = 6;
    static constexpr uint32_t duration_ns = 7;
    static constexpr uint32_t handler = 8;
    static constexpr uint32_t status = 9;
    static constexpr uint32_t flags = 10;
  };
  struct ColumnType {
    using id = IdColumn<WindowManagerShellTransitionsTable::Id>;
    using ts = TypedColumn<int64_t>;
    using transition_id = TypedColumn<int64_t>;
    using arg_set_id = TypedColumn<std::optional<uint32_t>>;
    using transition_type = TypedColumn<std::optional<uint32_t>>;
    using send_time_ns = TypedColumn<std::optional<int64_t>>;
    using dispatch_time_ns = TypedColumn<std::optional<int64_t>>;
    using duration_ns = TypedColumn<std::optional<int64_t>>;
    using handler = TypedColumn<std::optional<int64_t>>;
    using status = TypedColumn<std::optional<StringPool::Id>>;
    using flags = TypedColumn<std::optional<uint32_t>>;
  };
  struct Row : public macros_internal::RootParentTable::Row {
    Row(int64_t in_ts = {},
        int64_t in_transition_id = {},
        std::optional<uint32_t> in_arg_set_id = {},
        std::optional<uint32_t> in_transition_type = {},
        std::optional<int64_t> in_send_time_ns = {},
        std::optional<int64_t> in_dispatch_time_ns = {},
        std::optional<int64_t> in_duration_ns = {},
        std::optional<int64_t> in_handler = {},
        std::optional<StringPool::Id> in_status = {},
        std::optional<uint32_t> in_flags = {},
        std::nullptr_t = nullptr)
        : macros_internal::RootParentTable::Row(),
          ts(in_ts),
          transition_id(in_transition_id),
          arg_set_id(in_arg_set_id),
          transition_type(in_transition_type),
          send_time_ns(in_send_time_ns),
          dispatch_time_ns(in_dispatch_time_ns),
          duration_ns(in_duration_ns),
          handler(in_handler),
          status(in_status),
          flags(in_flags) {}
    int64_t ts;
    int64_t transition_id;
    std::optional<uint32_t> arg_set_id;
    std::optional<uint32_t> transition_type;
    std::optional<int64_t> send_time_ns;
    std::optional<int64_t> dispatch_time_ns;
    std::optional<int64_t> duration_ns;
    std::optional<int64_t> handler;
    std::optional<StringPool::Id> status;
    std::optional<uint32_t> flags;

    bool operator==(const WindowManagerShellTransitionsTable::Row& other) const {
      return ColumnType::ts::Equals(ts, other.ts) &&
       ColumnType::transition_id::Equals(transition_id, other.transition_id) &&
       ColumnType::arg_set_id::Equals(arg_set_id, other.arg_set_id) &&
       ColumnType::transition_type::Equals(transition_type, other.transition_type) &&
       ColumnType::send_time_ns::Equals(send_time_ns, other.send_time_ns) &&
       ColumnType::dispatch_time_ns::Equals(dispatch_time_ns, other.dispatch_time_ns) &&
       ColumnType::duration_ns::Equals(duration_ns, other.duration_ns) &&
       ColumnType::handler::Equals(handler, other.handler) &&
       ColumnType::status::Equals(status, other.status) &&
       ColumnType::flags::Equals(flags, other.flags);
    }
  };
  struct ColumnFlag {
    static constexpr uint32_t ts = ColumnType::ts::default_flags();
    static constexpr uint32_t transition_id = static_cast<uint32_t>(ColumnLegacy::Flag::kSorted) | ColumnType::transition_id::default_flags();
    static constexpr uint32_t arg_set_id = ColumnType::arg_set_id::default_flags();
    static constexpr uint32_t transition_type = ColumnType::transition_type::default_flags();
    static constexpr uint32_t send_time_ns = ColumnType::send_time_ns::default_flags();
    static constexpr uint32_t dispatch_time_ns = ColumnType::dispatch_time_ns::default_flags();
    static constexpr uint32_t duration_ns = ColumnType::duration_ns::default_flags();
    static constexpr uint32_t handler = ColumnType::handler::default_flags();
    static constexpr uint32_t status = ColumnType::status::default_flags();
    static constexpr uint32_t flags = ColumnType::flags::default_flags();
  };

  class RowNumber;
  class ConstRowReference;
  class RowReference;

  class RowNumber : public macros_internal::AbstractRowNumber<
      WindowManagerShellTransitionsTable, ConstRowReference, RowReference> {
   public:
    explicit RowNumber(uint32_t row_number)
        : AbstractRowNumber(row_number) {}
  };
  static_assert(std::is_trivially_destructible_v<RowNumber>,
                "Inheritance used without trivial destruction");

  class ConstRowReference : public macros_internal::AbstractConstRowReference<
    WindowManagerShellTransitionsTable, RowNumber> {
   public:
    ConstRowReference(const WindowManagerShellTransitionsTable* table, uint32_t row_number)
        : AbstractConstRowReference(table, row_number) {}

    ColumnType::id::type id() const {
      return table()->id()[row_number_];
    }
    ColumnType::ts::type ts() const {
      return table()->ts()[row_number_];
    }
    ColumnType::transition_id::type transition_id() const {
      return table()->transition_id()[row_number_];
    }
    ColumnType::arg_set_id::type arg_set_id() const {
      return table()->arg_set_id()[row_number_];
    }
    ColumnType::transition_type::type transition_type() const {
      return table()->transition_type()[row_number_];
    }
    ColumnType::send_time_ns::type send_time_ns() const {
      return table()->send_time_ns()[row_number_];
    }
    ColumnType::dispatch_time_ns::type dispatch_time_ns() const {
      return table()->dispatch_time_ns()[row_number_];
    }
    ColumnType::duration_ns::type duration_ns() const {
      return table()->duration_ns()[row_number_];
    }
    ColumnType::handler::type handler() const {
      return table()->handler()[row_number_];
    }
    ColumnType::status::type status() const {
      return table()->status()[row_number_];
    }
    ColumnType::flags::type flags() const {
      return table()->flags()[row_number_];
    }
  };
  static_assert(std::is_trivially_destructible_v<ConstRowReference>,
                "Inheritance used without trivial destruction");
  class RowReference : public ConstRowReference {
   public:
    RowReference(const WindowManagerShellTransitionsTable* table, uint32_t row_number)
        : ConstRowReference(table, row_number) {}

    void set_ts(
        ColumnType::ts::non_optional_type v) {
      return mutable_table()->mutable_ts()->Set(row_number_, v);
    }
    void set_transition_id(
        ColumnType::transition_id::non_optional_type v) {
      return mutable_table()->mutable_transition_id()->Set(row_number_, v);
    }
    void set_arg_set_id(
        ColumnType::arg_set_id::non_optional_type v) {
      return mutable_table()->mutable_arg_set_id()->Set(row_number_, v);
    }
    void set_transition_type(
        ColumnType::transition_type::non_optional_type v) {
      return mutable_table()->mutable_transition_type()->Set(row_number_, v);
    }
    void set_send_time_ns(
        ColumnType::send_time_ns::non_optional_type v) {
      return mutable_table()->mutable_send_time_ns()->Set(row_number_, v);
    }
    void set_dispatch_time_ns(
        ColumnType::dispatch_time_ns::non_optional_type v) {
      return mutable_table()->mutable_dispatch_time_ns()->Set(row_number_, v);
    }
    void set_duration_ns(
        ColumnType::duration_ns::non_optional_type v) {
      return mutable_table()->mutable_duration_ns()->Set(row_number_, v);
    }
    void set_handler(
        ColumnType::handler::non_optional_type v) {
      return mutable_table()->mutable_handler()->Set(row_number_, v);
    }
    void set_status(
        ColumnType::status::non_optional_type v) {
      return mutable_table()->mutable_status()->Set(row_number_, v);
    }
    void set_flags(
        ColumnType::flags::non_optional_type v) {
      return mutable_table()->mutable_flags()->Set(row_number_, v);
    }

   private:
    WindowManagerShellTransitionsTable* mutable_table() const {
      return const_cast<WindowManagerShellTransitionsTable*>(table());
    }
  };
  static_assert(std::is_trivially_destructible_v<RowReference>,
                "Inheritance used without trivial destruction");

  class ConstIterator;
  class ConstIterator : public macros_internal::AbstractConstIterator<
    ConstIterator, WindowManagerShellTransitionsTable, RowNumber, ConstRowReference> {
   public:
    ColumnType::id::type id() const {
      const auto& col = table()->id();
      return col.GetAtIdx(
        iterator_.StorageIndexForColumn(col.index_in_table()));
    }
    ColumnType::ts::type ts() const {
      const auto& col = table()->ts();
      return col.GetAtIdx(
        iterator_.StorageIndexForColumn(col.index_in_table()));
    }
    ColumnType::transition_id::type transition_id() const {
      const auto& col = table()->transition_id();
      return col.GetAtIdx(
        iterator_.StorageIndexForColumn(col.index_in_table()));
    }
    ColumnType::arg_set_id::type arg_set_id() const {
      const auto& col = table()->arg_set_id();
      return col.GetAtIdx(
        iterator_.StorageIndexForColumn(col.index_in_table()));
    }
    ColumnType::transition_type::type transition_type() const {
      const auto& col = table()->transition_type();
      return col.GetAtIdx(
        iterator_.StorageIndexForColumn(col.index_in_table()));
    }
    ColumnType::send_time_ns::type send_time_ns() const {
      const auto& col = table()->send_time_ns();
      return col.GetAtIdx(
        iterator_.StorageIndexForColumn(col.index_in_table()));
    }
    ColumnType::dispatch_time_ns::type dispatch_time_ns() const {
      const auto& col = table()->dispatch_time_ns();
      return col.GetAtIdx(
        iterator_.StorageIndexForColumn(col.index_in_table()));
    }
    ColumnType::duration_ns::type duration_ns() const {
      const auto& col = table()->duration_ns();
      return col.GetAtIdx(
        iterator_.StorageIndexForColumn(col.index_in_table()));
    }
    ColumnType::handler::type handler() const {
      const auto& col = table()->handler();
      return col.GetAtIdx(
        iterator_.StorageIndexForColumn(col.index_in_table()));
    }
    ColumnType::status::type status() const {
      const auto& col = table()->status();
      return col.GetAtIdx(
        iterator_.StorageIndexForColumn(col.index_in_table()));
    }
    ColumnType::flags::type flags() const {
      const auto& col = table()->flags();
      return col.GetAtIdx(
        iterator_.StorageIndexForColumn(col.index_in_table()));
    }

   protected:
    explicit ConstIterator(const WindowManagerShellTransitionsTable* table,
                           Table::Iterator iterator)
        : AbstractConstIterator(table, std::move(iterator)) {}

    uint32_t CurrentRowNumber() const {
      return iterator_.StorageIndexForLastOverlay();
    }

   private:
    friend class WindowManagerShellTransitionsTable;
    friend class macros_internal::AbstractConstIterator<
      ConstIterator, WindowManagerShellTransitionsTable, RowNumber, ConstRowReference>;
  };
  class Iterator : public ConstIterator {
    public:
     RowReference row_reference() const {
       return {const_cast<WindowManagerShellTransitionsTable*>(table()), CurrentRowNumber()};
     }

    private:
     friend class WindowManagerShellTransitionsTable;

     explicit Iterator(WindowManagerShellTransitionsTable* table, Table::Iterator iterator)
        : ConstIterator(table, std::move(iterator)) {}
  };

  struct IdAndRow {
    Id id;
    uint32_t row;
    RowReference row_reference;
    RowNumber row_number;
  };

  static std::vector<ColumnLegacy> GetColumns(
      WindowManagerShellTransitionsTable* self,
      const macros_internal::MacroTable* parent) {
    std::vector<ColumnLegacy> columns =
        CopyColumnsFromParentOrAddRootColumns(parent);
    uint32_t olay_idx = OverlayCount(parent);
    AddColumnToVector(columns, "ts", &self->ts_, ColumnFlag::ts,
                      static_cast<uint32_t>(columns.size()), olay_idx);
    AddColumnToVector(columns, "transition_id", &self->transition_id_, ColumnFlag::transition_id,
                      static_cast<uint32_t>(columns.size()), olay_idx);
    AddColumnToVector(columns, "arg_set_id", &self->arg_set_id_, ColumnFlag::arg_set_id,
                      static_cast<uint32_t>(columns.size()), olay_idx);
    AddColumnToVector(columns, "transition_type", &self->transition_type_, ColumnFlag::transition_type,
                      static_cast<uint32_t>(columns.size()), olay_idx);
    AddColumnToVector(columns, "send_time_ns", &self->send_time_ns_, ColumnFlag::send_time_ns,
                      static_cast<uint32_t>(columns.size()), olay_idx);
    AddColumnToVector(columns, "dispatch_time_ns", &self->dispatch_time_ns_, ColumnFlag::dispatch_time_ns,
                      static_cast<uint32_t>(columns.size()), olay_idx);
    AddColumnToVector(columns, "duration_ns", &self->duration_ns_, ColumnFlag::duration_ns,
                      static_cast<uint32_t>(columns.size()), olay_idx);
    AddColumnToVector(columns, "handler", &self->handler_, ColumnFlag::handler,
                      static_cast<uint32_t>(columns.size()), olay_idx);
    AddColumnToVector(columns, "status", &self->status_, ColumnFlag::status,
                      static_cast<uint32_t>(columns.size()), olay_idx);
    AddColumnToVector(columns, "flags", &self->flags_, ColumnFlag::flags,
                      static_cast<uint32_t>(columns.size()), olay_idx);
    base::ignore_result(self);
    return columns;
  }

  PERFETTO_NO_INLINE explicit WindowManagerShellTransitionsTable(StringPool* pool)
      : macros_internal::MacroTable(
          pool,
          GetColumns(this, nullptr),
          nullptr),
        ts_(ColumnStorage<ColumnType::ts::stored_type>::Create<false>()),
        transition_id_(ColumnStorage<ColumnType::transition_id::stored_type>::Create<false>()),
        arg_set_id_(ColumnStorage<ColumnType::arg_set_id::stored_type>::Create<false>()),
        transition_type_(ColumnStorage<ColumnType::transition_type::stored_type>::Create<false>()),
        send_time_ns_(ColumnStorage<ColumnType::send_time_ns::stored_type>::Create<false>()),
        dispatch_time_ns_(ColumnStorage<ColumnType::dispatch_time_ns::stored_type>::Create<false>()),
        duration_ns_(ColumnStorage<ColumnType::duration_ns::stored_type>::Create<false>()),
        handler_(ColumnStorage<ColumnType::handler::stored_type>::Create<false>()),
        status_(ColumnStorage<ColumnType::status::stored_type>::Create<false>()),
        flags_(ColumnStorage<ColumnType::flags::stored_type>::Create<false>())
,
        id_storage_layer_(new column::IdStorage()),
        ts_storage_layer_(
        new column::NumericStorage<ColumnType::ts::non_optional_stored_type>(
          &ts_.vector(),
          ColumnTypeHelper<ColumnType::ts::stored_type>::ToColumnType(),
          false)),
        transition_id_storage_layer_(
        new column::NumericStorage<ColumnType::transition_id::non_optional_stored_type>(
          &transition_id_.vector(),
          ColumnTypeHelper<ColumnType::transition_id::stored_type>::ToColumnType(),
          true)),
        arg_set_id_storage_layer_(
          new column::NumericStorage<ColumnType::arg_set_id::non_optional_stored_type>(
            &arg_set_id_.non_null_vector(),
            ColumnTypeHelper<ColumnType::arg_set_id::stored_type>::ToColumnType(),
            false)),
        transition_type_storage_layer_(
          new column::NumericStorage<ColumnType::transition_type::non_optional_stored_type>(
            &transition_type_.non_null_vector(),
            ColumnTypeHelper<ColumnType::transition_type::stored_type>::ToColumnType(),
            false)),
        send_time_ns_storage_layer_(
          new column::NumericStorage<ColumnType::send_time_ns::non_optional_stored_type>(
            &send_time_ns_.non_null_vector(),
            ColumnTypeHelper<ColumnType::send_time_ns::stored_type>::ToColumnType(),
            false)),
        dispatch_time_ns_storage_layer_(
          new column::NumericStorage<ColumnType::dispatch_time_ns::non_optional_stored_type>(
            &dispatch_time_ns_.non_null_vector(),
            ColumnTypeHelper<ColumnType::dispatch_time_ns::stored_type>::ToColumnType(),
            false)),
        duration_ns_storage_layer_(
          new column::NumericStorage<ColumnType::duration_ns::non_optional_stored_type>(
            &duration_ns_.non_null_vector(),
            ColumnTypeHelper<ColumnType::duration_ns::stored_type>::ToColumnType(),
            false)),
        handler_storage_layer_(
          new column::NumericStorage<ColumnType::handler::non_optional_stored_type>(
            &handler_.non_null_vector(),
            ColumnTypeHelper<ColumnType::handler::stored_type>::ToColumnType(),
            false)),
        status_storage_layer_(
          new column::StringStorage(string_pool(), &status_.vector())),
        flags_storage_layer_(
          new column::NumericStorage<ColumnType::flags::non_optional_stored_type>(
            &flags_.non_null_vector(),
            ColumnTypeHelper<ColumnType::flags::stored_type>::ToColumnType(),
            false))
,
        arg_set_id_null_layer_(new column::NullOverlay(arg_set_id_.bv())),
        transition_type_null_layer_(new column::NullOverlay(transition_type_.bv())),
        send_time_ns_null_layer_(new column::NullOverlay(send_time_ns_.bv())),
        dispatch_time_ns_null_layer_(new column::NullOverlay(dispatch_time_ns_.bv())),
        duration_ns_null_layer_(new column::NullOverlay(duration_ns_.bv())),
        handler_null_layer_(new column::NullOverlay(handler_.bv())),
        flags_null_layer_(new column::NullOverlay(flags_.bv())) {
    static_assert(
        ColumnLegacy::IsFlagsAndTypeValid<ColumnType::ts::stored_type>(
          ColumnFlag::ts),
        "Column type and flag combination is not valid");
      static_assert(
        ColumnLegacy::IsFlagsAndTypeValid<ColumnType::transition_id::stored_type>(
          ColumnFlag::transition_id),
        "Column type and flag combination is not valid");
      static_assert(
        ColumnLegacy::IsFlagsAndTypeValid<ColumnType::arg_set_id::stored_type>(
          ColumnFlag::arg_set_id),
        "Column type and flag combination is not valid");
      static_assert(
        ColumnLegacy::IsFlagsAndTypeValid<ColumnType::transition_type::stored_type>(
          ColumnFlag::transition_type),
        "Column type and flag combination is not valid");
      static_assert(
        ColumnLegacy::IsFlagsAndTypeValid<ColumnType::send_time_ns::stored_type>(
          ColumnFlag::send_time_ns),
        "Column type and flag combination is not valid");
      static_assert(
        ColumnLegacy::IsFlagsAndTypeValid<ColumnType::dispatch_time_ns::stored_type>(
          ColumnFlag::dispatch_time_ns),
        "Column type and flag combination is not valid");
      static_assert(
        ColumnLegacy::IsFlagsAndTypeValid<ColumnType::duration_ns::stored_type>(
          ColumnFlag::duration_ns),
        "Column type and flag combination is not valid");
      static_assert(
        ColumnLegacy::IsFlagsAndTypeValid<ColumnType::handler::stored_type>(
          ColumnFlag::handler),
        "Column type and flag combination is not valid");
      static_assert(
        ColumnLegacy::IsFlagsAndTypeValid<ColumnType::status::stored_type>(
          ColumnFlag::status),
        "Column type and flag combination is not valid");
      static_assert(
        ColumnLegacy::IsFlagsAndTypeValid<ColumnType::flags::stored_type>(
          ColumnFlag::flags),
        "Column type and flag combination is not valid");
    OnConstructionCompletedRegularConstructor(
      {id_storage_layer_,ts_storage_layer_,transition_id_storage_layer_,arg_set_id_storage_layer_,transition_type_storage_layer_,send_time_ns_storage_layer_,dispatch_time_ns_storage_layer_,duration_ns_storage_layer_,handler_storage_layer_,status_storage_layer_,flags_storage_layer_},
      {{},{},{},arg_set_id_null_layer_,transition_type_null_layer_,send_time_ns_null_layer_,dispatch_time_ns_null_layer_,duration_ns_null_layer_,handler_null_layer_,{},flags_null_layer_});
  }
  ~WindowManagerShellTransitionsTable() override;

  static const char* Name() { return "window_manager_shell_transitions"; }

  static Table::Schema ComputeStaticSchema() {
    Table::Schema schema;
    schema.columns.emplace_back(Table::Schema::Column{
        "id", SqlValue::Type::kLong, true, true, false, false});
    schema.columns.emplace_back(Table::Schema::Column{
        "ts", ColumnType::ts::SqlValueType(), false,
        false,
        false,
        false});
    schema.columns.emplace_back(Table::Schema::Column{
        "transition_id", ColumnType::transition_id::SqlValueType(), false,
        true,
        false,
        false});
    schema.columns.emplace_back(Table::Schema::Column{
        "arg_set_id", ColumnType::arg_set_id::SqlValueType(), false,
        false,
        false,
        false});
    schema.columns.emplace_back(Table::Schema::Column{
        "transition_type", ColumnType::transition_type::SqlValueType(), false,
        false,
        false,
        false});
    schema.columns.emplace_back(Table::Schema::Column{
        "send_time_ns", ColumnType::send_time_ns::SqlValueType(), false,
        false,
        false,
        false});
    schema.columns.emplace_back(Table::Schema::Column{
        "dispatch_time_ns", ColumnType::dispatch_time_ns::SqlValueType(), false,
        false,
        false,
        false});
    schema.columns.emplace_back(Table::Schema::Column{
        "duration_ns", ColumnType::duration_ns::SqlValueType(), false,
        false,
        false,
        false});
    schema.columns.emplace_back(Table::Schema::Column{
        "handler", ColumnType::handler::SqlValueType(), false,
        false,
        false,
        false});
    schema.columns.emplace_back(Table::Schema::Column{
        "status", ColumnType::status::SqlValueType(), false,
        false,
        false,
        false});
    schema.columns.emplace_back(Table::Schema::Column{
        "flags", ColumnType::flags::SqlValueType(), false,
        false,
        false,
        false});
    return schema;
  }

  ConstIterator IterateRows() const {
    return ConstIterator(this, Table::IterateRows());
  }

  Iterator IterateRows() { return Iterator(this, Table::IterateRows()); }

  ConstIterator FilterToIterator(const Query& q) const {
    return ConstIterator(this, QueryToIterator(q));
  }

  Iterator FilterToIterator(const Query& q) {
    return Iterator(this, QueryToIterator(q));
  }

  void ShrinkToFit() {
    ts_.ShrinkToFit();
    transition_id_.ShrinkToFit();
    arg_set_id_.ShrinkToFit();
    transition_type_.ShrinkToFit();
    send_time_ns_.ShrinkToFit();
    dispatch_time_ns_.ShrinkToFit();
    duration_ns_.ShrinkToFit();
    handler_.ShrinkToFit();
    status_.ShrinkToFit();
    flags_.ShrinkToFit();
  }

  ConstRowReference operator[](uint32_t r) const {
    return ConstRowReference(this, r);
  }
  RowReference operator[](uint32_t r) { return RowReference(this, r); }
  ConstRowReference operator[](RowNumber r) const {
    return ConstRowReference(this, r.row_number());
  }
  RowReference operator[](RowNumber r) {
    return RowReference(this, r.row_number());
  }

  std::optional<ConstRowReference> FindById(Id find_id) const {
    std::optional<uint32_t> row = id().IndexOf(find_id);
    return row ? std::make_optional(ConstRowReference(this, *row))
               : std::nullopt;
  }

  std::optional<RowReference> FindById(Id find_id) {
    std::optional<uint32_t> row = id().IndexOf(find_id);
    return row ? std::make_optional(RowReference(this, *row)) : std::nullopt;
  }

  IdAndRow Insert(const Row& row) {
    uint32_t row_number = row_count();
    Id id = Id{row_number};
    mutable_ts()->Append(row.ts);
    mutable_transition_id()->Append(row.transition_id);
    mutable_arg_set_id()->Append(row.arg_set_id);
    mutable_transition_type()->Append(row.transition_type);
    mutable_send_time_ns()->Append(row.send_time_ns);
    mutable_dispatch_time_ns()->Append(row.dispatch_time_ns);
    mutable_duration_ns()->Append(row.duration_ns);
    mutable_handler()->Append(row.handler);
    mutable_status()->Append(row.status);
    mutable_flags()->Append(row.flags);
    UpdateSelfOverlayAfterInsert();
    return IdAndRow{id, row_number, RowReference(this, row_number),
                     RowNumber(row_number)};
  }

  

  const IdColumn<WindowManagerShellTransitionsTable::Id>& id() const {
    return static_cast<const ColumnType::id&>(columns()[ColumnIndex::id]);
  }
  const TypedColumn<int64_t>& ts() const {
    return static_cast<const ColumnType::ts&>(columns()[ColumnIndex::ts]);
  }
  const TypedColumn<int64_t>& transition_id() const {
    return static_cast<const ColumnType::transition_id&>(columns()[ColumnIndex::transition_id]);
  }
  const TypedColumn<std::optional<uint32_t>>& arg_set_id() const {
    return static_cast<const ColumnType::arg_set_id&>(columns()[ColumnIndex::arg_set_id]);
  }
  const TypedColumn<std::optional<uint32_t>>& transition_type() const {
    return static_cast<const ColumnType::transition_type&>(columns()[ColumnIndex::transition_type]);
  }
  const TypedColumn<std::optional<int64_t>>& send_time_ns() const {
    return static_cast<const ColumnType::send_time_ns&>(columns()[ColumnIndex::send_time_ns]);
  }
  const TypedColumn<std::optional<int64_t>>& dispatch_time_ns() const {
    return static_cast<const ColumnType::dispatch_time_ns&>(columns()[ColumnIndex::dispatch_time_ns]);
  }
  const TypedColumn<std::optional<int64_t>>& duration_ns() const {
    return static_cast<const ColumnType::duration_ns&>(columns()[ColumnIndex::duration_ns]);
  }
  const TypedColumn<std::optional<int64_t>>& handler() const {
    return static_cast<const ColumnType::handler&>(columns()[ColumnIndex::handler]);
  }
  const TypedColumn<std::optional<StringPool::Id>>& status() const {
    return static_cast<const ColumnType::status&>(columns()[ColumnIndex::status]);
  }
  const TypedColumn<std::optional<uint32_t>>& flags() const {
    return static_cast<const ColumnType::flags&>(columns()[ColumnIndex::flags]);
  }

  TypedColumn<int64_t>* mutable_ts() {
    return static_cast<ColumnType::ts*>(
        GetColumn(ColumnIndex::ts));
  }
  TypedColumn<int64_t>* mutable_transition_id() {
    return static_cast<ColumnType::transition_id*>(
        GetColumn(ColumnIndex::transition_id));
  }
  TypedColumn<std::optional<uint32_t>>* mutable_arg_set_id() {
    return static_cast<ColumnType::arg_set_id*>(
        GetColumn(ColumnIndex::arg_set_id));
  }
  TypedColumn<std::optional<uint32_t>>* mutable_transition_type() {
    return static_cast<ColumnType::transition_type*>(
        GetColumn(ColumnIndex::transition_type));
  }
  TypedColumn<std::optional<int64_t>>* mutable_send_time_ns() {
    return static_cast<ColumnType::send_time_ns*>(
        GetColumn(ColumnIndex::send_time_ns));
  }
  TypedColumn<std::optional<int64_t>>* mutable_dispatch_time_ns() {
    return static_cast<ColumnType::dispatch_time_ns*>(
        GetColumn(ColumnIndex::dispatch_time_ns));
  }
  TypedColumn<std::optional<int64_t>>* mutable_duration_ns() {
    return static_cast<ColumnType::duration_ns*>(
        GetColumn(ColumnIndex::duration_ns));
  }
  TypedColumn<std::optional<int64_t>>* mutable_handler() {
    return static_cast<ColumnType::handler*>(
        GetColumn(ColumnIndex::handler));
  }
  TypedColumn<std::optional<StringPool::Id>>* mutable_status() {
    return static_cast<ColumnType::status*>(
        GetColumn(ColumnIndex::status));
  }
  TypedColumn<std::optional<uint32_t>>* mutable_flags() {
    return static_cast<ColumnType::flags*>(
        GetColumn(ColumnIndex::flags));
  }

 private:
  
  
  ColumnStorage<ColumnType::ts::stored_type> ts_;
  ColumnStorage<ColumnType::transition_id::stored_type> transition_id_;
  ColumnStorage<ColumnType::arg_set_id::stored_type> arg_set_id_;
  ColumnStorage<ColumnType::transition_type::stored_type> transition_type_;
  ColumnStorage<ColumnType::send_time_ns::stored_type> send_time_ns_;
  ColumnStorage<ColumnType::dispatch_time_ns::stored_type> dispatch_time_ns_;
  ColumnStorage<ColumnType::duration_ns::stored_type> duration_ns_;
  ColumnStorage<ColumnType::handler::stored_type> handler_;
  ColumnStorage<ColumnType::status::stored_type> status_;
  ColumnStorage<ColumnType::flags::stored_type> flags_;

  RefPtr<column::StorageLayer> id_storage_layer_;
  RefPtr<column::StorageLayer> ts_storage_layer_;
  RefPtr<column::StorageLayer> transition_id_storage_layer_;
  RefPtr<column::StorageLayer> arg_set_id_storage_layer_;
  RefPtr<column::StorageLayer> transition_type_storage_layer_;
  RefPtr<column::StorageLayer> send_time_ns_storage_layer_;
  RefPtr<column::StorageLayer> dispatch_time_ns_storage_layer_;
  RefPtr<column::StorageLayer> duration_ns_storage_layer_;
  RefPtr<column::StorageLayer> handler_storage_layer_;
  RefPtr<column::StorageLayer> status_storage_layer_;
  RefPtr<column::StorageLayer> flags_storage_layer_;

  RefPtr<column::OverlayLayer> arg_set_id_null_layer_;
  RefPtr<column::OverlayLayer> transition_type_null_layer_;
  RefPtr<column::OverlayLayer> send_time_ns_null_layer_;
  RefPtr<column::OverlayLayer> dispatch_time_ns_null_layer_;
  RefPtr<column::OverlayLayer> duration_ns_null_layer_;
  RefPtr<column::OverlayLayer> handler_null_layer_;
  RefPtr<column::OverlayLayer> flags_null_layer_;
};
  

class WindowManagerShellTransitionHandlersTable : public macros_internal::MacroTable {
 public:
  static constexpr uint32_t kColumnCount = 4;

  struct Id : public BaseId {
    Id() = default;
    explicit constexpr Id(uint32_t v) : BaseId(v) {}
  };
  static_assert(std::is_trivially_destructible_v<Id>,
                "Inheritance used without trivial destruction");
    
  struct ColumnIndex {
    static constexpr uint32_t id = 0;
    static constexpr uint32_t handler_id = 1;
    static constexpr uint32_t handler_name = 2;
    static constexpr uint32_t base64_proto_id = 3;
  };
  struct ColumnType {
    using id = IdColumn<WindowManagerShellTransitionHandlersTable::Id>;
    using handler_id = TypedColumn<int64_t>;
    using handler_name = TypedColumn<StringPool::Id>;
    using base64_proto_id = TypedColumn<std::optional<uint32_t>>;
  };
  struct Row : public macros_internal::RootParentTable::Row {
    Row(int64_t in_handler_id = {},
        StringPool::Id in_handler_name = {},
        std::optional<uint32_t> in_base64_proto_id = {},
        std::nullptr_t = nullptr)
        : macros_internal::RootParentTable::Row(),
          handler_id(in_handler_id),
          handler_name(in_handler_name),
          base64_proto_id(in_base64_proto_id) {}
    int64_t handler_id;
    StringPool::Id handler_name;
    std::optional<uint32_t> base64_proto_id;

    bool operator==(const WindowManagerShellTransitionHandlersTable::Row& other) const {
      return ColumnType::handler_id::Equals(handler_id, other.handler_id) &&
       ColumnType::handler_name::Equals(handler_name, other.handler_name) &&
       ColumnType::base64_proto_id::Equals(base64_proto_id, other.base64_proto_id);
    }
  };
  struct ColumnFlag {
    static constexpr uint32_t handler_id = ColumnType::handler_id::default_flags();
    static constexpr uint32_t handler_name = ColumnType::handler_name::default_flags();
    static constexpr uint32_t base64_proto_id = ColumnType::base64_proto_id::default_flags();
  };

  class RowNumber;
  class ConstRowReference;
  class RowReference;

  class RowNumber : public macros_internal::AbstractRowNumber<
      WindowManagerShellTransitionHandlersTable, ConstRowReference, RowReference> {
   public:
    explicit RowNumber(uint32_t row_number)
        : AbstractRowNumber(row_number) {}
  };
  static_assert(std::is_trivially_destructible_v<RowNumber>,
                "Inheritance used without trivial destruction");

  class ConstRowReference : public macros_internal::AbstractConstRowReference<
    WindowManagerShellTransitionHandlersTable, RowNumber> {
   public:
    ConstRowReference(const WindowManagerShellTransitionHandlersTable* table, uint32_t row_number)
        : AbstractConstRowReference(table, row_number) {}

    ColumnType::id::type id() const {
      return table()->id()[row_number_];
    }
    ColumnType::handler_id::type handler_id() const {
      return table()->handler_id()[row_number_];
    }
    ColumnType::handler_name::type handler_name() const {
      return table()->handler_name()[row_number_];
    }
    ColumnType::base64_proto_id::type base64_proto_id() const {
      return table()->base64_proto_id()[row_number_];
    }
  };
  static_assert(std::is_trivially_destructible_v<ConstRowReference>,
                "Inheritance used without trivial destruction");
  class RowReference : public ConstRowReference {
   public:
    RowReference(const WindowManagerShellTransitionHandlersTable* table, uint32_t row_number)
        : ConstRowReference(table, row_number) {}

    void set_handler_id(
        ColumnType::handler_id::non_optional_type v) {
      return mutable_table()->mutable_handler_id()->Set(row_number_, v);
    }
    void set_handler_name(
        ColumnType::handler_name::non_optional_type v) {
      return mutable_table()->mutable_handler_name()->Set(row_number_, v);
    }
    void set_base64_proto_id(
        ColumnType::base64_proto_id::non_optional_type v) {
      return mutable_table()->mutable_base64_proto_id()->Set(row_number_, v);
    }

   private:
    WindowManagerShellTransitionHandlersTable* mutable_table() const {
      return const_cast<WindowManagerShellTransitionHandlersTable*>(table());
    }
  };
  static_assert(std::is_trivially_destructible_v<RowReference>,
                "Inheritance used without trivial destruction");

  class ConstIterator;
  class ConstIterator : public macros_internal::AbstractConstIterator<
    ConstIterator, WindowManagerShellTransitionHandlersTable, RowNumber, ConstRowReference> {
   public:
    ColumnType::id::type id() const {
      const auto& col = table()->id();
      return col.GetAtIdx(
        iterator_.StorageIndexForColumn(col.index_in_table()));
    }
    ColumnType::handler_id::type handler_id() const {
      const auto& col = table()->handler_id();
      return col.GetAtIdx(
        iterator_.StorageIndexForColumn(col.index_in_table()));
    }
    ColumnType::handler_name::type handler_name() const {
      const auto& col = table()->handler_name();
      return col.GetAtIdx(
        iterator_.StorageIndexForColumn(col.index_in_table()));
    }
    ColumnType::base64_proto_id::type base64_proto_id() const {
      const auto& col = table()->base64_proto_id();
      return col.GetAtIdx(
        iterator_.StorageIndexForColumn(col.index_in_table()));
    }

   protected:
    explicit ConstIterator(const WindowManagerShellTransitionHandlersTable* table,
                           Table::Iterator iterator)
        : AbstractConstIterator(table, std::move(iterator)) {}

    uint32_t CurrentRowNumber() const {
      return iterator_.StorageIndexForLastOverlay();
    }

   private:
    friend class WindowManagerShellTransitionHandlersTable;
    friend class macros_internal::AbstractConstIterator<
      ConstIterator, WindowManagerShellTransitionHandlersTable, RowNumber, ConstRowReference>;
  };
  class Iterator : public ConstIterator {
    public:
     RowReference row_reference() const {
       return {const_cast<WindowManagerShellTransitionHandlersTable*>(table()), CurrentRowNumber()};
     }

    private:
     friend class WindowManagerShellTransitionHandlersTable;

     explicit Iterator(WindowManagerShellTransitionHandlersTable* table, Table::Iterator iterator)
        : ConstIterator(table, std::move(iterator)) {}
  };

  struct IdAndRow {
    Id id;
    uint32_t row;
    RowReference row_reference;
    RowNumber row_number;
  };

  static std::vector<ColumnLegacy> GetColumns(
      WindowManagerShellTransitionHandlersTable* self,
      const macros_internal::MacroTable* parent) {
    std::vector<ColumnLegacy> columns =
        CopyColumnsFromParentOrAddRootColumns(parent);
    uint32_t olay_idx = OverlayCount(parent);
    AddColumnToVector(columns, "handler_id", &self->handler_id_, ColumnFlag::handler_id,
                      static_cast<uint32_t>(columns.size()), olay_idx);
    AddColumnToVector(columns, "handler_name", &self->handler_name_, ColumnFlag::handler_name,
                      static_cast<uint32_t>(columns.size()), olay_idx);
    AddColumnToVector(columns, "base64_proto_id", &self->base64_proto_id_, ColumnFlag::base64_proto_id,
                      static_cast<uint32_t>(columns.size()), olay_idx);
    base::ignore_result(self);
    return columns;
  }

  PERFETTO_NO_INLINE explicit WindowManagerShellTransitionHandlersTable(StringPool* pool)
      : macros_internal::MacroTable(
          pool,
          GetColumns(this, nullptr),
          nullptr),
        handler_id_(ColumnStorage<ColumnType::handler_id::stored_type>::Create<false>()),
        handler_name_(ColumnStorage<ColumnType::handler_name::stored_type>::Create<false>()),
        base64_proto_id_(ColumnStorage<ColumnType::base64_proto_id::stored_type>::Create<false>())
,
        id_storage_layer_(new column::IdStorage()),
        handler_id_storage_layer_(
        new column::NumericStorage<ColumnType::handler_id::non_optional_stored_type>(
          &handler_id_.vector(),
          ColumnTypeHelper<ColumnType::handler_id::stored_type>::ToColumnType(),
          false)),
        handler_name_storage_layer_(
          new column::StringStorage(string_pool(), &handler_name_.vector())),
        base64_proto_id_storage_layer_(
          new column::NumericStorage<ColumnType::base64_proto_id::non_optional_stored_type>(
            &base64_proto_id_.non_null_vector(),
            ColumnTypeHelper<ColumnType::base64_proto_id::stored_type>::ToColumnType(),
            false))
,
        base64_proto_id_null_layer_(new column::NullOverlay(base64_proto_id_.bv())) {
    static_assert(
        ColumnLegacy::IsFlagsAndTypeValid<ColumnType::handler_id::stored_type>(
          ColumnFlag::handler_id),
        "Column type and flag combination is not valid");
      static_assert(
        ColumnLegacy::IsFlagsAndTypeValid<ColumnType::handler_name::stored_type>(
          ColumnFlag::handler_name),
        "Column type and flag combination is not valid");
      static_assert(
        ColumnLegacy::IsFlagsAndTypeValid<ColumnType::base64_proto_id::stored_type>(
          ColumnFlag::base64_proto_id),
        "Column type and flag combination is not valid");
    OnConstructionCompletedRegularConstructor(
      {id_storage_layer_,handler_id_storage_layer_,handler_name_storage_layer_,base64_proto_id_storage_layer_},
      {{},{},{},base64_proto_id_null_layer_});
  }
  ~WindowManagerShellTransitionHandlersTable() override;

  static const char* Name() { return "window_manager_shell_transition_handlers"; }

  static Table::Schema ComputeStaticSchema() {
    Table::Schema schema;
    schema.columns.emplace_back(Table::Schema::Column{
        "id", SqlValue::Type::kLong, true, true, false, false});
    schema.columns.emplace_back(Table::Schema::Column{
        "handler_id", ColumnType::handler_id::SqlValueType(), false,
        false,
        false,
        false});
    schema.columns.emplace_back(Table::Schema::Column{
        "handler_name", ColumnType::handler_name::SqlValueType(), false,
        false,
        false,
        false});
    schema.columns.emplace_back(Table::Schema::Column{
        "base64_proto_id", ColumnType::base64_proto_id::SqlValueType(), false,
        false,
        false,
        false});
    return schema;
  }

  ConstIterator IterateRows() const {
    return ConstIterator(this, Table::IterateRows());
  }

  Iterator IterateRows() { return Iterator(this, Table::IterateRows()); }

  ConstIterator FilterToIterator(const Query& q) const {
    return ConstIterator(this, QueryToIterator(q));
  }

  Iterator FilterToIterator(const Query& q) {
    return Iterator(this, QueryToIterator(q));
  }

  void ShrinkToFit() {
    handler_id_.ShrinkToFit();
    handler_name_.ShrinkToFit();
    base64_proto_id_.ShrinkToFit();
  }

  ConstRowReference operator[](uint32_t r) const {
    return ConstRowReference(this, r);
  }
  RowReference operator[](uint32_t r) { return RowReference(this, r); }
  ConstRowReference operator[](RowNumber r) const {
    return ConstRowReference(this, r.row_number());
  }
  RowReference operator[](RowNumber r) {
    return RowReference(this, r.row_number());
  }

  std::optional<ConstRowReference> FindById(Id find_id) const {
    std::optional<uint32_t> row = id().IndexOf(find_id);
    return row ? std::make_optional(ConstRowReference(this, *row))
               : std::nullopt;
  }

  std::optional<RowReference> FindById(Id find_id) {
    std::optional<uint32_t> row = id().IndexOf(find_id);
    return row ? std::make_optional(RowReference(this, *row)) : std::nullopt;
  }

  IdAndRow Insert(const Row& row) {
    uint32_t row_number = row_count();
    Id id = Id{row_number};
    mutable_handler_id()->Append(row.handler_id);
    mutable_handler_name()->Append(row.handler_name);
    mutable_base64_proto_id()->Append(row.base64_proto_id);
    UpdateSelfOverlayAfterInsert();
    return IdAndRow{id, row_number, RowReference(this, row_number),
                     RowNumber(row_number)};
  }

  

  const IdColumn<WindowManagerShellTransitionHandlersTable::Id>& id() const {
    return static_cast<const ColumnType::id&>(columns()[ColumnIndex::id]);
  }
  const TypedColumn<int64_t>& handler_id() const {
    return static_cast<const ColumnType::handler_id&>(columns()[ColumnIndex::handler_id]);
  }
  const TypedColumn<StringPool::Id>& handler_name() const {
    return static_cast<const ColumnType::handler_name&>(columns()[ColumnIndex::handler_name]);
  }
  const TypedColumn<std::optional<uint32_t>>& base64_proto_id() const {
    return static_cast<const ColumnType::base64_proto_id&>(columns()[ColumnIndex::base64_proto_id]);
  }

  TypedColumn<int64_t>* mutable_handler_id() {
    return static_cast<ColumnType::handler_id*>(
        GetColumn(ColumnIndex::handler_id));
  }
  TypedColumn<StringPool::Id>* mutable_handler_name() {
    return static_cast<ColumnType::handler_name*>(
        GetColumn(ColumnIndex::handler_name));
  }
  TypedColumn<std::optional<uint32_t>>* mutable_base64_proto_id() {
    return static_cast<ColumnType::base64_proto_id*>(
        GetColumn(ColumnIndex::base64_proto_id));
  }

 private:
  
  
  ColumnStorage<ColumnType::handler_id::stored_type> handler_id_;
  ColumnStorage<ColumnType::handler_name::stored_type> handler_name_;
  ColumnStorage<ColumnType::base64_proto_id::stored_type> base64_proto_id_;

  RefPtr<column::StorageLayer> id_storage_layer_;
  RefPtr<column::StorageLayer> handler_id_storage_layer_;
  RefPtr<column::StorageLayer> handler_name_storage_layer_;
  RefPtr<column::StorageLayer> base64_proto_id_storage_layer_;

  RefPtr<column::OverlayLayer> base64_proto_id_null_layer_;
};
  

class WindowManagerShellTransitionParticipantsTable : public macros_internal::MacroTable {
 public:
  static constexpr uint32_t kColumnCount = 4;

  struct Id : public BaseId {
    Id() = default;
    explicit constexpr Id(uint32_t v) : BaseId(v) {}
  };
  static_assert(std::is_trivially_destructible_v<Id>,
                "Inheritance used without trivial destruction");
    
  struct ColumnIndex {
    static constexpr uint32_t id = 0;
    static constexpr uint32_t transition_id = 1;
    static constexpr uint32_t layer_id = 2;
    static constexpr uint32_t window_id = 3;
  };
  struct ColumnType {
    using id = IdColumn<WindowManagerShellTransitionParticipantsTable::Id>;
    using transition_id = TypedColumn<int64_t>;
    using layer_id = TypedColumn<std::optional<uint32_t>>;
    using window_id = TypedColumn<std::optional<uint32_t>>;
  };
  struct Row : public macros_internal::RootParentTable::Row {
    Row(int64_t in_transition_id = {},
        std::optional<uint32_t> in_layer_id = {},
        std::optional<uint32_t> in_window_id = {},
        std::nullptr_t = nullptr)
        : macros_internal::RootParentTable::Row(),
          transition_id(in_transition_id),
          layer_id(in_layer_id),
          window_id(in_window_id) {}
    int64_t transition_id;
    std::optional<uint32_t> layer_id;
    std::optional<uint32_t> window_id;

    bool operator==(const WindowManagerShellTransitionParticipantsTable::Row& other) const {
      return ColumnType::transition_id::Equals(transition_id, other.transition_id) &&
       ColumnType::layer_id::Equals(layer_id, other.layer_id) &&
       ColumnType::window_id::Equals(window_id, other.window_id);
    }
  };
  struct ColumnFlag {
    static constexpr uint32_t transition_id = ColumnType::transition_id::default_flags();
    static constexpr uint32_t layer_id = ColumnType::layer_id::default_flags();
    static constexpr uint32_t window_id = ColumnType::window_id::default_flags();
  };

  class RowNumber;
  class ConstRowReference;
  class RowReference;

  class RowNumber : public macros_internal::AbstractRowNumber<
      WindowManagerShellTransitionParticipantsTable, ConstRowReference, RowReference> {
   public:
    explicit RowNumber(uint32_t row_number)
        : AbstractRowNumber(row_number) {}
  };
  static_assert(std::is_trivially_destructible_v<RowNumber>,
                "Inheritance used without trivial destruction");

  class ConstRowReference : public macros_internal::AbstractConstRowReference<
    WindowManagerShellTransitionParticipantsTable, RowNumber> {
   public:
    ConstRowReference(const WindowManagerShellTransitionParticipantsTable* table, uint32_t row_number)
        : AbstractConstRowReference(table, row_number) {}

    ColumnType::id::type id() const {
      return table()->id()[row_number_];
    }
    ColumnType::transition_id::type transition_id() const {
      return table()->transition_id()[row_number_];
    }
    ColumnType::layer_id::type layer_id() const {
      return table()->layer_id()[row_number_];
    }
    ColumnType::window_id::type window_id() const {
      return table()->window_id()[row_number_];
    }
  };
  static_assert(std::is_trivially_destructible_v<ConstRowReference>,
                "Inheritance used without trivial destruction");
  class RowReference : public ConstRowReference {
   public:
    RowReference(const WindowManagerShellTransitionParticipantsTable* table, uint32_t row_number)
        : ConstRowReference(table, row_number) {}

    void set_transition_id(
        ColumnType::transition_id::non_optional_type v) {
      return mutable_table()->mutable_transition_id()->Set(row_number_, v);
    }
    void set_layer_id(
        ColumnType::layer_id::non_optional_type v) {
      return mutable_table()->mutable_layer_id()->Set(row_number_, v);
    }
    void set_window_id(
        ColumnType::window_id::non_optional_type v) {
      return mutable_table()->mutable_window_id()->Set(row_number_, v);
    }

   private:
    WindowManagerShellTransitionParticipantsTable* mutable_table() const {
      return const_cast<WindowManagerShellTransitionParticipantsTable*>(table());
    }
  };
  static_assert(std::is_trivially_destructible_v<RowReference>,
                "Inheritance used without trivial destruction");

  class ConstIterator;
  class ConstIterator : public macros_internal::AbstractConstIterator<
    ConstIterator, WindowManagerShellTransitionParticipantsTable, RowNumber, ConstRowReference> {
   public:
    ColumnType::id::type id() const {
      const auto& col = table()->id();
      return col.GetAtIdx(
        iterator_.StorageIndexForColumn(col.index_in_table()));
    }
    ColumnType::transition_id::type transition_id() const {
      const auto& col = table()->transition_id();
      return col.GetAtIdx(
        iterator_.StorageIndexForColumn(col.index_in_table()));
    }
    ColumnType::layer_id::type layer_id() const {
      const auto& col = table()->layer_id();
      return col.GetAtIdx(
        iterator_.StorageIndexForColumn(col.index_in_table()));
    }
    ColumnType::window_id::type window_id() const {
      const auto& col = table()->window_id();
      return col.GetAtIdx(
        iterator_.StorageIndexForColumn(col.index_in_table()));
    }

   protected:
    explicit ConstIterator(const WindowManagerShellTransitionParticipantsTable* table,
                           Table::Iterator iterator)
        : AbstractConstIterator(table, std::move(iterator)) {}

    uint32_t CurrentRowNumber() const {
      return iterator_.StorageIndexForLastOverlay();
    }

   private:
    friend class WindowManagerShellTransitionParticipantsTable;
    friend class macros_internal::AbstractConstIterator<
      ConstIterator, WindowManagerShellTransitionParticipantsTable, RowNumber, ConstRowReference>;
  };
  class Iterator : public ConstIterator {
    public:
     RowReference row_reference() const {
       return {const_cast<WindowManagerShellTransitionParticipantsTable*>(table()), CurrentRowNumber()};
     }

    private:
     friend class WindowManagerShellTransitionParticipantsTable;

     explicit Iterator(WindowManagerShellTransitionParticipantsTable* table, Table::Iterator iterator)
        : ConstIterator(table, std::move(iterator)) {}
  };

  struct IdAndRow {
    Id id;
    uint32_t row;
    RowReference row_reference;
    RowNumber row_number;
  };

  static std::vector<ColumnLegacy> GetColumns(
      WindowManagerShellTransitionParticipantsTable* self,
      const macros_internal::MacroTable* parent) {
    std::vector<ColumnLegacy> columns =
        CopyColumnsFromParentOrAddRootColumns(parent);
    uint32_t olay_idx = OverlayCount(parent);
    AddColumnToVector(columns, "transition_id", &self->transition_id_, ColumnFlag::transition_id,
                      static_cast<uint32_t>(columns.size()), olay_idx);
    AddColumnToVector(columns, "layer_id", &self->layer_id_, ColumnFlag::layer_id,
                      static_cast<uint32_t>(columns.size()), olay_idx);
    AddColumnToVector(columns, "window_id", &self->window_id_, ColumnFlag::window_id,
                      static_cast<uint32_t>(columns.size()), olay_idx);
    base::ignore_result(self);
    return columns;
  }

  PERFETTO_NO_INLINE explicit WindowManagerShellTransitionParticipantsTable(StringPool* pool)
      : macros_internal::MacroTable(
          pool,
          GetColumns(this, nullptr),
          nullptr),
        transition_id_(ColumnStorage<ColumnType::transition_id::stored_type>::Create<false>()),
        layer_id_(ColumnStorage<ColumnType::layer_id::stored_type>::Create<false>()),
        window_id_(ColumnStorage<ColumnType::window_id::stored_type>::Create<false>())
,
        id_storage_layer_(new column::IdStorage()),
        transition_id_storage_layer_(
        new column::NumericStorage<ColumnType::transition_id::non_optional_stored_type>(
          &transition_id_.vector(),
          ColumnTypeHelper<ColumnType::transition_id::stored_type>::ToColumnType(),
          false)),
        layer_id_storage_layer_(
          new column::NumericStorage<ColumnType::layer_id::non_optional_stored_type>(
            &layer_id_.non_null_vector(),
            ColumnTypeHelper<ColumnType::layer_id::stored_type>::ToColumnType(),
            false)),
        window_id_storage_layer_(
          new column::NumericStorage<ColumnType::window_id::non_optional_stored_type>(
            &window_id_.non_null_vector(),
            ColumnTypeHelper<ColumnType::window_id::stored_type>::ToColumnType(),
            false))
,
        layer_id_null_layer_(new column::NullOverlay(layer_id_.bv())),
        window_id_null_layer_(new column::NullOverlay(window_id_.bv())) {
    static_assert(
        ColumnLegacy::IsFlagsAndTypeValid<ColumnType::transition_id::stored_type>(
          ColumnFlag::transition_id),
        "Column type and flag combination is not valid");
      static_assert(
        ColumnLegacy::IsFlagsAndTypeValid<ColumnType::layer_id::stored_type>(
          ColumnFlag::layer_id),
        "Column type and flag combination is not valid");
      static_assert(
        ColumnLegacy::IsFlagsAndTypeValid<ColumnType::window_id::stored_type>(
          ColumnFlag::window_id),
        "Column type and flag combination is not valid");
    OnConstructionCompletedRegularConstructor(
      {id_storage_layer_,transition_id_storage_layer_,layer_id_storage_layer_,window_id_storage_layer_},
      {{},{},layer_id_null_layer_,window_id_null_layer_});
  }
  ~WindowManagerShellTransitionParticipantsTable() override;

  static const char* Name() { return "__intrinsic_window_manager_shell_transition_participants"; }

  static Table::Schema ComputeStaticSchema() {
    Table::Schema schema;
    schema.columns.emplace_back(Table::Schema::Column{
        "id", SqlValue::Type::kLong, true, true, false, false});
    schema.columns.emplace_back(Table::Schema::Column{
        "transition_id", ColumnType::transition_id::SqlValueType(), false,
        false,
        false,
        false});
    schema.columns.emplace_back(Table::Schema::Column{
        "layer_id", ColumnType::layer_id::SqlValueType(), false,
        false,
        false,
        false});
    schema.columns.emplace_back(Table::Schema::Column{
        "window_id", ColumnType::window_id::SqlValueType(), false,
        false,
        false,
        false});
    return schema;
  }

  ConstIterator IterateRows() const {
    return ConstIterator(this, Table::IterateRows());
  }

  Iterator IterateRows() { return Iterator(this, Table::IterateRows()); }

  ConstIterator FilterToIterator(const Query& q) const {
    return ConstIterator(this, QueryToIterator(q));
  }

  Iterator FilterToIterator(const Query& q) {
    return Iterator(this, QueryToIterator(q));
  }

  void ShrinkToFit() {
    transition_id_.ShrinkToFit();
    layer_id_.ShrinkToFit();
    window_id_.ShrinkToFit();
  }

  ConstRowReference operator[](uint32_t r) const {
    return ConstRowReference(this, r);
  }
  RowReference operator[](uint32_t r) { return RowReference(this, r); }
  ConstRowReference operator[](RowNumber r) const {
    return ConstRowReference(this, r.row_number());
  }
  RowReference operator[](RowNumber r) {
    return RowReference(this, r.row_number());
  }

  std::optional<ConstRowReference> FindById(Id find_id) const {
    std::optional<uint32_t> row = id().IndexOf(find_id);
    return row ? std::make_optional(ConstRowReference(this, *row))
               : std::nullopt;
  }

  std::optional<RowReference> FindById(Id find_id) {
    std::optional<uint32_t> row = id().IndexOf(find_id);
    return row ? std::make_optional(RowReference(this, *row)) : std::nullopt;
  }

  IdAndRow Insert(const Row& row) {
    uint32_t row_number = row_count();
    Id id = Id{row_number};
    mutable_transition_id()->Append(row.transition_id);
    mutable_layer_id()->Append(row.layer_id);
    mutable_window_id()->Append(row.window_id);
    UpdateSelfOverlayAfterInsert();
    return IdAndRow{id, row_number, RowReference(this, row_number),
                     RowNumber(row_number)};
  }

  

  const IdColumn<WindowManagerShellTransitionParticipantsTable::Id>& id() const {
    return static_cast<const ColumnType::id&>(columns()[ColumnIndex::id]);
  }
  const TypedColumn<int64_t>& transition_id() const {
    return static_cast<const ColumnType::transition_id&>(columns()[ColumnIndex::transition_id]);
  }
  const TypedColumn<std::optional<uint32_t>>& layer_id() const {
    return static_cast<const ColumnType::layer_id&>(columns()[ColumnIndex::layer_id]);
  }
  const TypedColumn<std::optional<uint32_t>>& window_id() const {
    return static_cast<const ColumnType::window_id&>(columns()[ColumnIndex::window_id]);
  }

  TypedColumn<int64_t>* mutable_transition_id() {
    return static_cast<ColumnType::transition_id*>(
        GetColumn(ColumnIndex::transition_id));
  }
  TypedColumn<std::optional<uint32_t>>* mutable_layer_id() {
    return static_cast<ColumnType::layer_id*>(
        GetColumn(ColumnIndex::layer_id));
  }
  TypedColumn<std::optional<uint32_t>>* mutable_window_id() {
    return static_cast<ColumnType::window_id*>(
        GetColumn(ColumnIndex::window_id));
  }

 private:
  
  
  ColumnStorage<ColumnType::transition_id::stored_type> transition_id_;
  ColumnStorage<ColumnType::layer_id::stored_type> layer_id_;
  ColumnStorage<ColumnType::window_id::stored_type> window_id_;

  RefPtr<column::StorageLayer> id_storage_layer_;
  RefPtr<column::StorageLayer> transition_id_storage_layer_;
  RefPtr<column::StorageLayer> layer_id_storage_layer_;
  RefPtr<column::StorageLayer> window_id_storage_layer_;

  RefPtr<column::OverlayLayer> layer_id_null_layer_;
  RefPtr<column::OverlayLayer> window_id_null_layer_;
};
  

class WindowManagerShellTransitionProtosTable : public macros_internal::MacroTable {
 public:
  static constexpr uint32_t kColumnCount = 3;

  struct Id : public BaseId {
    Id() = default;
    explicit constexpr Id(uint32_t v) : BaseId(v) {}
  };
  static_assert(std::is_trivially_destructible_v<Id>,
                "Inheritance used without trivial destruction");
    
  struct ColumnIndex {
    static constexpr uint32_t id = 0;
    static constexpr uint32_t transition_id = 1;
    static constexpr uint32_t base64_proto_id = 2;
  };
  struct ColumnType {
    using id = IdColumn<WindowManagerShellTransitionProtosTable::Id>;
    using transition_id = TypedColumn<int64_t>;
    using base64_proto_id = TypedColumn<uint32_t>;
  };
  struct Row : public macros_internal::RootParentTable::Row {
    Row(int64_t in_transition_id = {},
        uint32_t in_base64_proto_id = {},
        std::nullptr_t = nullptr)
        : macros_internal::RootParentTable::Row(),
          transition_id(in_transition_id),
          base64_proto_id(in_base64_proto_id) {}
    int64_t transition_id;
    uint32_t base64_proto_id;

    bool operator==(const WindowManagerShellTransitionProtosTable::Row& other) const {
      return ColumnType::transition_id::Equals(transition_id, other.transition_id) &&
       ColumnType::base64_proto_id::Equals(base64_proto_id, other.base64_proto_id);
    }
  };
  struct ColumnFlag {
    static constexpr uint32_t transition_id = ColumnType::transition_id::default_flags();
    static constexpr uint32_t base64_proto_id = ColumnType::base64_proto_id::default_flags();
  };

  class RowNumber;
  class ConstRowReference;
  class RowReference;

  class RowNumber : public macros_internal::AbstractRowNumber<
      WindowManagerShellTransitionProtosTable, ConstRowReference, RowReference> {
   public:
    explicit RowNumber(uint32_t row_number)
        : AbstractRowNumber(row_number) {}
  };
  static_assert(std::is_trivially_destructible_v<RowNumber>,
                "Inheritance used without trivial destruction");

  class ConstRowReference : public macros_internal::AbstractConstRowReference<
    WindowManagerShellTransitionProtosTable, RowNumber> {
   public:
    ConstRowReference(const WindowManagerShellTransitionProtosTable* table, uint32_t row_number)
        : AbstractConstRowReference(table, row_number) {}

    ColumnType::id::type id() const {
      return table()->id()[row_number_];
    }
    ColumnType::transition_id::type transition_id() const {
      return table()->transition_id()[row_number_];
    }
    ColumnType::base64_proto_id::type base64_proto_id() const {
      return table()->base64_proto_id()[row_number_];
    }
  };
  static_assert(std::is_trivially_destructible_v<ConstRowReference>,
                "Inheritance used without trivial destruction");
  class RowReference : public ConstRowReference {
   public:
    RowReference(const WindowManagerShellTransitionProtosTable* table, uint32_t row_number)
        : ConstRowReference(table, row_number) {}

    void set_transition_id(
        ColumnType::transition_id::non_optional_type v) {
      return mutable_table()->mutable_transition_id()->Set(row_number_, v);
    }
    void set_base64_proto_id(
        ColumnType::base64_proto_id::non_optional_type v) {
      return mutable_table()->mutable_base64_proto_id()->Set(row_number_, v);
    }

   private:
    WindowManagerShellTransitionProtosTable* mutable_table() const {
      return const_cast<WindowManagerShellTransitionProtosTable*>(table());
    }
  };
  static_assert(std::is_trivially_destructible_v<RowReference>,
                "Inheritance used without trivial destruction");

  class ConstIterator;
  class ConstIterator : public macros_internal::AbstractConstIterator<
    ConstIterator, WindowManagerShellTransitionProtosTable, RowNumber, ConstRowReference> {
   public:
    ColumnType::id::type id() const {
      const auto& col = table()->id();
      return col.GetAtIdx(
        iterator_.StorageIndexForColumn(col.index_in_table()));
    }
    ColumnType::transition_id::type transition_id() const {
      const auto& col = table()->transition_id();
      return col.GetAtIdx(
        iterator_.StorageIndexForColumn(col.index_in_table()));
    }
    ColumnType::base64_proto_id::type base64_proto_id() const {
      const auto& col = table()->base64_proto_id();
      return col.GetAtIdx(
        iterator_.StorageIndexForColumn(col.index_in_table()));
    }

   protected:
    explicit ConstIterator(const WindowManagerShellTransitionProtosTable* table,
                           Table::Iterator iterator)
        : AbstractConstIterator(table, std::move(iterator)) {}

    uint32_t CurrentRowNumber() const {
      return iterator_.StorageIndexForLastOverlay();
    }

   private:
    friend class WindowManagerShellTransitionProtosTable;
    friend class macros_internal::AbstractConstIterator<
      ConstIterator, WindowManagerShellTransitionProtosTable, RowNumber, ConstRowReference>;
  };
  class Iterator : public ConstIterator {
    public:
     RowReference row_reference() const {
       return {const_cast<WindowManagerShellTransitionProtosTable*>(table()), CurrentRowNumber()};
     }

    private:
     friend class WindowManagerShellTransitionProtosTable;

     explicit Iterator(WindowManagerShellTransitionProtosTable* table, Table::Iterator iterator)
        : ConstIterator(table, std::move(iterator)) {}
  };

  struct IdAndRow {
    Id id;
    uint32_t row;
    RowReference row_reference;
    RowNumber row_number;
  };

  static std::vector<ColumnLegacy> GetColumns(
      WindowManagerShellTransitionProtosTable* self,
      const macros_internal::MacroTable* parent) {
    std::vector<ColumnLegacy> columns =
        CopyColumnsFromParentOrAddRootColumns(parent);
    uint32_t olay_idx = OverlayCount(parent);
    AddColumnToVector(columns, "transition_id", &self->transition_id_, ColumnFlag::transition_id,
                      static_cast<uint32_t>(columns.size()), olay_idx);
    AddColumnToVector(columns, "base64_proto_id", &self->base64_proto_id_, ColumnFlag::base64_proto_id,
                      static_cast<uint32_t>(columns.size()), olay_idx);
    base::ignore_result(self);
    return columns;
  }

  PERFETTO_NO_INLINE explicit WindowManagerShellTransitionProtosTable(StringPool* pool)
      : macros_internal::MacroTable(
          pool,
          GetColumns(this, nullptr),
          nullptr),
        transition_id_(ColumnStorage<ColumnType::transition_id::stored_type>::Create<false>()),
        base64_proto_id_(ColumnStorage<ColumnType::base64_proto_id::stored_type>::Create<false>())
,
        id_storage_layer_(new column::IdStorage()),
        transition_id_storage_layer_(
        new column::NumericStorage<ColumnType::transition_id::non_optional_stored_type>(
          &transition_id_.vector(),
          ColumnTypeHelper<ColumnType::transition_id::stored_type>::ToColumnType(),
          false)),
        base64_proto_id_storage_layer_(
        new column::NumericStorage<ColumnType::base64_proto_id::non_optional_stored_type>(
          &base64_proto_id_.vector(),
          ColumnTypeHelper<ColumnType::base64_proto_id::stored_type>::ToColumnType(),
          false))
         {
    static_assert(
        ColumnLegacy::IsFlagsAndTypeValid<ColumnType::transition_id::stored_type>(
          ColumnFlag::transition_id),
        "Column type and flag combination is not valid");
      static_assert(
        ColumnLegacy::IsFlagsAndTypeValid<ColumnType::base64_proto_id::stored_type>(
          ColumnFlag::base64_proto_id),
        "Column type and flag combination is not valid");
    OnConstructionCompletedRegularConstructor(
      {id_storage_layer_,transition_id_storage_layer_,base64_proto_id_storage_layer_},
      {{},{},{}});
  }
  ~WindowManagerShellTransitionProtosTable() override;

  static const char* Name() { return "__intrinsic_window_manager_shell_transition_protos"; }

  static Table::Schema ComputeStaticSchema() {
    Table::Schema schema;
    schema.columns.emplace_back(Table::Schema::Column{
        "id", SqlValue::Type::kLong, true, true, false, false});
    schema.columns.emplace_back(Table::Schema::Column{
        "transition_id", ColumnType::transition_id::SqlValueType(), false,
        false,
        false,
        false});
    schema.columns.emplace_back(Table::Schema::Column{
        "base64_proto_id", ColumnType::base64_proto_id::SqlValueType(), false,
        false,
        false,
        false});
    return schema;
  }

  ConstIterator IterateRows() const {
    return ConstIterator(this, Table::IterateRows());
  }

  Iterator IterateRows() { return Iterator(this, Table::IterateRows()); }

  ConstIterator FilterToIterator(const Query& q) const {
    return ConstIterator(this, QueryToIterator(q));
  }

  Iterator FilterToIterator(const Query& q) {
    return Iterator(this, QueryToIterator(q));
  }

  void ShrinkToFit() {
    transition_id_.ShrinkToFit();
    base64_proto_id_.ShrinkToFit();
  }

  ConstRowReference operator[](uint32_t r) const {
    return ConstRowReference(this, r);
  }
  RowReference operator[](uint32_t r) { return RowReference(this, r); }
  ConstRowReference operator[](RowNumber r) const {
    return ConstRowReference(this, r.row_number());
  }
  RowReference operator[](RowNumber r) {
    return RowReference(this, r.row_number());
  }

  std::optional<ConstRowReference> FindById(Id find_id) const {
    std::optional<uint32_t> row = id().IndexOf(find_id);
    return row ? std::make_optional(ConstRowReference(this, *row))
               : std::nullopt;
  }

  std::optional<RowReference> FindById(Id find_id) {
    std::optional<uint32_t> row = id().IndexOf(find_id);
    return row ? std::make_optional(RowReference(this, *row)) : std::nullopt;
  }

  IdAndRow Insert(const Row& row) {
    uint32_t row_number = row_count();
    Id id = Id{row_number};
    mutable_transition_id()->Append(row.transition_id);
    mutable_base64_proto_id()->Append(row.base64_proto_id);
    UpdateSelfOverlayAfterInsert();
    return IdAndRow{id, row_number, RowReference(this, row_number),
                     RowNumber(row_number)};
  }

  

  const IdColumn<WindowManagerShellTransitionProtosTable::Id>& id() const {
    return static_cast<const ColumnType::id&>(columns()[ColumnIndex::id]);
  }
  const TypedColumn<int64_t>& transition_id() const {
    return static_cast<const ColumnType::transition_id&>(columns()[ColumnIndex::transition_id]);
  }
  const TypedColumn<uint32_t>& base64_proto_id() const {
    return static_cast<const ColumnType::base64_proto_id&>(columns()[ColumnIndex::base64_proto_id]);
  }

  TypedColumn<int64_t>* mutable_transition_id() {
    return static_cast<ColumnType::transition_id*>(
        GetColumn(ColumnIndex::transition_id));
  }
  TypedColumn<uint32_t>* mutable_base64_proto_id() {
    return static_cast<ColumnType::base64_proto_id*>(
        GetColumn(ColumnIndex::base64_proto_id));
  }

 private:
  
  
  ColumnStorage<ColumnType::transition_id::stored_type> transition_id_;
  ColumnStorage<ColumnType::base64_proto_id::stored_type> base64_proto_id_;

  RefPtr<column::StorageLayer> id_storage_layer_;
  RefPtr<column::StorageLayer> transition_id_storage_layer_;
  RefPtr<column::StorageLayer> base64_proto_id_storage_layer_;

  
};
  

class WindowManagerTable : public macros_internal::MacroTable {
 public:
  static constexpr uint32_t kColumnCount = 4;

  struct Id : public BaseId {
    Id() = default;
    explicit constexpr Id(uint32_t v) : BaseId(v) {}
  };
  static_assert(std::is_trivially_destructible_v<Id>,
                "Inheritance used without trivial destruction");
    
  struct ColumnIndex {
    static constexpr uint32_t id = 0;
    static constexpr uint32_t ts = 1;
    static constexpr uint32_t arg_set_id = 2;
    static constexpr uint32_t base64_proto_id = 3;
  };
  struct ColumnType {
    using id = IdColumn<WindowManagerTable::Id>;
    using ts = TypedColumn<int64_t>;
    using arg_set_id = TypedColumn<std::optional<uint32_t>>;
    using base64_proto_id = TypedColumn<std::optional<uint32_t>>;
  };
  struct Row : public macros_internal::RootParentTable::Row {
    Row(int64_t in_ts = {},
        std::optional<uint32_t> in_arg_set_id = {},
        std::optional<uint32_t> in_base64_proto_id = {},
        std::nullptr_t = nullptr)
        : macros_internal::RootParentTable::Row(),
          ts(in_ts),
          arg_set_id(in_arg_set_id),
          base64_proto_id(in_base64_proto_id) {}
    int64_t ts;
    std::optional<uint32_t> arg_set_id;
    std::optional<uint32_t> base64_proto_id;

    bool operator==(const WindowManagerTable::Row& other) const {
      return ColumnType::ts::Equals(ts, other.ts) &&
       ColumnType::arg_set_id::Equals(arg_set_id, other.arg_set_id) &&
       ColumnType::base64_proto_id::Equals(base64_proto_id, other.base64_proto_id);
    }
  };
  struct ColumnFlag {
    static constexpr uint32_t ts = static_cast<uint32_t>(ColumnLegacy::Flag::kSorted) | ColumnType::ts::default_flags();
    static constexpr uint32_t arg_set_id = ColumnType::arg_set_id::default_flags();
    static constexpr uint32_t base64_proto_id = ColumnType::base64_proto_id::default_flags();
  };

  class RowNumber;
  class ConstRowReference;
  class RowReference;

  class RowNumber : public macros_internal::AbstractRowNumber<
      WindowManagerTable, ConstRowReference, RowReference> {
   public:
    explicit RowNumber(uint32_t row_number)
        : AbstractRowNumber(row_number) {}
  };
  static_assert(std::is_trivially_destructible_v<RowNumber>,
                "Inheritance used without trivial destruction");

  class ConstRowReference : public macros_internal::AbstractConstRowReference<
    WindowManagerTable, RowNumber> {
   public:
    ConstRowReference(const WindowManagerTable* table, uint32_t row_number)
        : AbstractConstRowReference(table, row_number) {}

    ColumnType::id::type id() const {
      return table()->id()[row_number_];
    }
    ColumnType::ts::type ts() const {
      return table()->ts()[row_number_];
    }
    ColumnType::arg_set_id::type arg_set_id() const {
      return table()->arg_set_id()[row_number_];
    }
    ColumnType::base64_proto_id::type base64_proto_id() const {
      return table()->base64_proto_id()[row_number_];
    }
  };
  static_assert(std::is_trivially_destructible_v<ConstRowReference>,
                "Inheritance used without trivial destruction");
  class RowReference : public ConstRowReference {
   public:
    RowReference(const WindowManagerTable* table, uint32_t row_number)
        : ConstRowReference(table, row_number) {}

    void set_ts(
        ColumnType::ts::non_optional_type v) {
      return mutable_table()->mutable_ts()->Set(row_number_, v);
    }
    void set_arg_set_id(
        ColumnType::arg_set_id::non_optional_type v) {
      return mutable_table()->mutable_arg_set_id()->Set(row_number_, v);
    }
    void set_base64_proto_id(
        ColumnType::base64_proto_id::non_optional_type v) {
      return mutable_table()->mutable_base64_proto_id()->Set(row_number_, v);
    }

   private:
    WindowManagerTable* mutable_table() const {
      return const_cast<WindowManagerTable*>(table());
    }
  };
  static_assert(std::is_trivially_destructible_v<RowReference>,
                "Inheritance used without trivial destruction");

  class ConstIterator;
  class ConstIterator : public macros_internal::AbstractConstIterator<
    ConstIterator, WindowManagerTable, RowNumber, ConstRowReference> {
   public:
    ColumnType::id::type id() const {
      const auto& col = table()->id();
      return col.GetAtIdx(
        iterator_.StorageIndexForColumn(col.index_in_table()));
    }
    ColumnType::ts::type ts() const {
      const auto& col = table()->ts();
      return col.GetAtIdx(
        iterator_.StorageIndexForColumn(col.index_in_table()));
    }
    ColumnType::arg_set_id::type arg_set_id() const {
      const auto& col = table()->arg_set_id();
      return col.GetAtIdx(
        iterator_.StorageIndexForColumn(col.index_in_table()));
    }
    ColumnType::base64_proto_id::type base64_proto_id() const {
      const auto& col = table()->base64_proto_id();
      return col.GetAtIdx(
        iterator_.StorageIndexForColumn(col.index_in_table()));
    }

   protected:
    explicit ConstIterator(const WindowManagerTable* table,
                           Table::Iterator iterator)
        : AbstractConstIterator(table, std::move(iterator)) {}

    uint32_t CurrentRowNumber() const {
      return iterator_.StorageIndexForLastOverlay();
    }

   private:
    friend class WindowManagerTable;
    friend class macros_internal::AbstractConstIterator<
      ConstIterator, WindowManagerTable, RowNumber, ConstRowReference>;
  };
  class Iterator : public ConstIterator {
    public:
     RowReference row_reference() const {
       return {const_cast<WindowManagerTable*>(table()), CurrentRowNumber()};
     }

    private:
     friend class WindowManagerTable;

     explicit Iterator(WindowManagerTable* table, Table::Iterator iterator)
        : ConstIterator(table, std::move(iterator)) {}
  };

  struct IdAndRow {
    Id id;
    uint32_t row;
    RowReference row_reference;
    RowNumber row_number;
  };

  static std::vector<ColumnLegacy> GetColumns(
      WindowManagerTable* self,
      const macros_internal::MacroTable* parent) {
    std::vector<ColumnLegacy> columns =
        CopyColumnsFromParentOrAddRootColumns(parent);
    uint32_t olay_idx = OverlayCount(parent);
    AddColumnToVector(columns, "ts", &self->ts_, ColumnFlag::ts,
                      static_cast<uint32_t>(columns.size()), olay_idx);
    AddColumnToVector(columns, "arg_set_id", &self->arg_set_id_, ColumnFlag::arg_set_id,
                      static_cast<uint32_t>(columns.size()), olay_idx);
    AddColumnToVector(columns, "base64_proto_id", &self->base64_proto_id_, ColumnFlag::base64_proto_id,
                      static_cast<uint32_t>(columns.size()), olay_idx);
    base::ignore_result(self);
    return columns;
  }

  PERFETTO_NO_INLINE explicit WindowManagerTable(StringPool* pool)
      : macros_internal::MacroTable(
          pool,
          GetColumns(this, nullptr),
          nullptr),
        ts_(ColumnStorage<ColumnType::ts::stored_type>::Create<false>()),
        arg_set_id_(ColumnStorage<ColumnType::arg_set_id::stored_type>::Create<false>()),
        base64_proto_id_(ColumnStorage<ColumnType::base64_proto_id::stored_type>::Create<false>())
,
        id_storage_layer_(new column::IdStorage()),
        ts_storage_layer_(
        new column::NumericStorage<ColumnType::ts::non_optional_stored_type>(
          &ts_.vector(),
          ColumnTypeHelper<ColumnType::ts::stored_type>::ToColumnType(),
          true)),
        arg_set_id_storage_layer_(
          new column::NumericStorage<ColumnType::arg_set_id::non_optional_stored_type>(
            &arg_set_id_.non_null_vector(),
            ColumnTypeHelper<ColumnType::arg_set_id::stored_type>::ToColumnType(),
            false)),
        base64_proto_id_storage_layer_(
          new column::NumericStorage<ColumnType::base64_proto_id::non_optional_stored_type>(
            &base64_proto_id_.non_null_vector(),
            ColumnTypeHelper<ColumnType::base64_proto_id::stored_type>::ToColumnType(),
            false))
,
        arg_set_id_null_layer_(new column::NullOverlay(arg_set_id_.bv())),
        base64_proto_id_null_layer_(new column::NullOverlay(base64_proto_id_.bv())) {
    static_assert(
        ColumnLegacy::IsFlagsAndTypeValid<ColumnType::ts::stored_type>(
          ColumnFlag::ts),
        "Column type and flag combination is not valid");
      static_assert(
        ColumnLegacy::IsFlagsAndTypeValid<ColumnType::arg_set_id::stored_type>(
          ColumnFlag::arg_set_id),
        "Column type and flag combination is not valid");
      static_assert(
        ColumnLegacy::IsFlagsAndTypeValid<ColumnType::base64_proto_id::stored_type>(
          ColumnFlag::base64_proto_id),
        "Column type and flag combination is not valid");
    OnConstructionCompletedRegularConstructor(
      {id_storage_layer_,ts_storage_layer_,arg_set_id_storage_layer_,base64_proto_id_storage_layer_},
      {{},{},arg_set_id_null_layer_,base64_proto_id_null_layer_});
  }
  ~WindowManagerTable() override;

  static const char* Name() { return "__intrinsic_windowmanager"; }

  static Table::Schema ComputeStaticSchema() {
    Table::Schema schema;
    schema.columns.emplace_back(Table::Schema::Column{
        "id", SqlValue::Type::kLong, true, true, false, false});
    schema.columns.emplace_back(Table::Schema::Column{
        "ts", ColumnType::ts::SqlValueType(), false,
        true,
        false,
        false});
    schema.columns.emplace_back(Table::Schema::Column{
        "arg_set_id", ColumnType::arg_set_id::SqlValueType(), false,
        false,
        false,
        false});
    schema.columns.emplace_back(Table::Schema::Column{
        "base64_proto_id", ColumnType::base64_proto_id::SqlValueType(), false,
        false,
        false,
        false});
    return schema;
  }

  ConstIterator IterateRows() const {
    return ConstIterator(this, Table::IterateRows());
  }

  Iterator IterateRows() { return Iterator(this, Table::IterateRows()); }

  ConstIterator FilterToIterator(const Query& q) const {
    return ConstIterator(this, QueryToIterator(q));
  }

  Iterator FilterToIterator(const Query& q) {
    return Iterator(this, QueryToIterator(q));
  }

  void ShrinkToFit() {
    ts_.ShrinkToFit();
    arg_set_id_.ShrinkToFit();
    base64_proto_id_.ShrinkToFit();
  }

  ConstRowReference operator[](uint32_t r) const {
    return ConstRowReference(this, r);
  }
  RowReference operator[](uint32_t r) { return RowReference(this, r); }
  ConstRowReference operator[](RowNumber r) const {
    return ConstRowReference(this, r.row_number());
  }
  RowReference operator[](RowNumber r) {
    return RowReference(this, r.row_number());
  }

  std::optional<ConstRowReference> FindById(Id find_id) const {
    std::optional<uint32_t> row = id().IndexOf(find_id);
    return row ? std::make_optional(ConstRowReference(this, *row))
               : std::nullopt;
  }

  std::optional<RowReference> FindById(Id find_id) {
    std::optional<uint32_t> row = id().IndexOf(find_id);
    return row ? std::make_optional(RowReference(this, *row)) : std::nullopt;
  }

  IdAndRow Insert(const Row& row) {
    uint32_t row_number = row_count();
    Id id = Id{row_number};
    mutable_ts()->Append(row.ts);
    mutable_arg_set_id()->Append(row.arg_set_id);
    mutable_base64_proto_id()->Append(row.base64_proto_id);
    UpdateSelfOverlayAfterInsert();
    return IdAndRow{id, row_number, RowReference(this, row_number),
                     RowNumber(row_number)};
  }

  

  const IdColumn<WindowManagerTable::Id>& id() const {
    return static_cast<const ColumnType::id&>(columns()[ColumnIndex::id]);
  }
  const TypedColumn<int64_t>& ts() const {
    return static_cast<const ColumnType::ts&>(columns()[ColumnIndex::ts]);
  }
  const TypedColumn<std::optional<uint32_t>>& arg_set_id() const {
    return static_cast<const ColumnType::arg_set_id&>(columns()[ColumnIndex::arg_set_id]);
  }
  const TypedColumn<std::optional<uint32_t>>& base64_proto_id() const {
    return static_cast<const ColumnType::base64_proto_id&>(columns()[ColumnIndex::base64_proto_id]);
  }

  TypedColumn<int64_t>* mutable_ts() {
    return static_cast<ColumnType::ts*>(
        GetColumn(ColumnIndex::ts));
  }
  TypedColumn<std::optional<uint32_t>>* mutable_arg_set_id() {
    return static_cast<ColumnType::arg_set_id*>(
        GetColumn(ColumnIndex::arg_set_id));
  }
  TypedColumn<std::optional<uint32_t>>* mutable_base64_proto_id() {
    return static_cast<ColumnType::base64_proto_id*>(
        GetColumn(ColumnIndex::base64_proto_id));
  }

 private:
  
  
  ColumnStorage<ColumnType::ts::stored_type> ts_;
  ColumnStorage<ColumnType::arg_set_id::stored_type> arg_set_id_;
  ColumnStorage<ColumnType::base64_proto_id::stored_type> base64_proto_id_;

  RefPtr<column::StorageLayer> id_storage_layer_;
  RefPtr<column::StorageLayer> ts_storage_layer_;
  RefPtr<column::StorageLayer> arg_set_id_storage_layer_;
  RefPtr<column::StorageLayer> base64_proto_id_storage_layer_;

  RefPtr<column::OverlayLayer> arg_set_id_null_layer_;
  RefPtr<column::OverlayLayer> base64_proto_id_null_layer_;
};

}  // namespace perfetto

#endif  // SRC_TRACE_PROCESSOR_TABLES_WINSCOPE_TABLES_PY_H_
